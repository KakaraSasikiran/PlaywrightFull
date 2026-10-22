import {test as Base} from '@playwright/test'
import { Google } from '../pages/Google';

type myFixtures={

    google:Google,
   

}

export const test = Base.extend<myFixtures>({
    google:async({page},use)=>{
        use(new Google(page))
    }
})

export {expect} from '@playwright/test'

