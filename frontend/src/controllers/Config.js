class Config {
    host;
    port;
    constructor() {
      //backend server details
  
      this.host = `http://localhost`;
      this.port = ":5000/api";
    }
  
  }
  
  var obj = new Config();
  export default obj;
  