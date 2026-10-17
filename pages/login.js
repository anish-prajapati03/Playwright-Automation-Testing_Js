class login {
    constructor(page){
        this.page=page
        this.username=''   // xpath in single cort
        this.password=''  // xpath in single cort
        this.loginbutton='' // xpath in single cort
    }

    async logintoApp(){
        await this.page.fill(this.username,"Admin")
        await this.page.fill(this.password,"admin123")
        await this.page.click(this.loginbutton)

    }
}
module.exports = login;
