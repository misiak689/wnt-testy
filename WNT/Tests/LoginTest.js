
import HomePage from "../Pages/HomePage";
const dataSet = require('../TestData/TestData');


fixture `LoginTest`
    .page(dataSet.environments.acc);

test('LoginTest', async () => {
    await HomePage.login(dataSet.users["1"].userId, dataSet.users["1"].password);


});
