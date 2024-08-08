
import models from "../models"
import XLSX from "xlsx"
import { Op, where } from "sequelize";

const { publication } = models
export default {
  async savePublication(req) {
    try {
      const bodyData = req.body
      const publicationDetail = await publication.create(bodyData);
      return publicationDetail;
    }
    catch (err) {
      console.log(err);
    }
  },
  async getPublicationByUser(req) {
    try {
      const {
        query: {
          limit, offset, author, title, journal, year
        },
      } = req;
      // const { userId } = req.params
      const whereClause = {
        userId: {
            [Op.eq]: req.user.id
        }
    };

    if (author) {
      whereClause.author = { [Op.like]: `%${author}%` };
  }

  if (title) {
      whereClause.title = { [Op.like]: `%${title}%` };
  }

  if (journal) {
      whereClause.journal = journal;
  }

  if (year) {
      whereClause.year = { [Op.like]: `%${year}%` };
  }
      const publicationDetails = await publication.findAndCountAll({ 
        
          limit: parseInt(limit || 10),
          offset: parseInt(offset || 0),
        
        where: whereClause });
      return publicationDetails;
    }
    catch (err) {
      console.log(err);
    }
  },
  async getAllPublications(req) {
    try {
      const {
        query: {
          limit, offset,
        },
      } = req;
      const publicationDetails = await publication.findAndCountAll({
        limit: parseInt(limit || 10),
        offset: parseInt(offset || 0),
      });
      return publicationDetails;
    }
    catch (err) {
      console.log(err);
    }
  },

  async importPublication(req) {
    try {

      const workbook = XLSX.readFile(req?.file?.path);
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];



      const columnMapping = {
        'Name of the Author/s': 'author',
        'Title of paper': 'title',
        'Name of the Journal': 'journal',
        'visibility': 'visibility',
        'Volume': 'volume',
        'No.': 'number',
        'Issue': 'issue',
        'Page No (pp)': 'pageNumber',
        'Year': 'year',
        'ISSN No.': 'issnNumber',
        'Indexing': 'indexing',
        'Impact Factor': 'impactFactor',
        'DOI': 'doi'
      };



      const excelData = XLSX.utils.sheet_to_json(worksheet);

      const formattedData = excelData.map(row => {
        const formattedRow = {};
        for (const excelColumn in row) {
          const databaseColumn = columnMapping[excelColumn];
          if (databaseColumn) {
            formattedRow[databaseColumn] = row[excelColumn];
          }
        }
        return formattedRow;
      });

      const dataWithUserId = formattedData.map(row => ({
        ...row,
        userId: req.user.id
      }));
      const publicationDetail = await publication.bulkCreate(dataWithUserId);
      return publicationDetail;

    }
    catch (err) {
      console.log(err);
    }
  },

}