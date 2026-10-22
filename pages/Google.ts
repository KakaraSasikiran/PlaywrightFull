import { Locator, Page } from "@playwright/test";

export class Google {
  readonly page: Page;
  readonly aboutLink:Locator
  readonly storeLink:Locator
  constructor(page: Page) {
    this.page = page;
    this.aboutLink = page.getByRole("link",{name:'About',exact:true})
    this.storeLink = page.getByRole("link",{name:'Store',exact:true})
  }

  async clickAbout(){
    await this.aboutLink.click()
  }
  async storeClick(){
    await this.storeLink.click()
  }

}
