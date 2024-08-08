module.exports={
    generateString(){
        const chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let otp = '';
        for (let x = 0; x < 20; x++) {
          const i = Math.floor(Math.random() * 62);
          otp += chars.charAt(i);
        }
      
        return otp;
      }
    
}