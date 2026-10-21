import {Locator, Page} from '@playwright/test'
export class Google{
    readonly page:Page
    readonly aboutBtn:Locator
    constructor(page:Page){
        this.page=page
        this.aboutBtn = page.getByRole("link",{name:'About',exact:true})
    }

    async clickAbout(){
        await this.aboutBtn.click()
    }

}