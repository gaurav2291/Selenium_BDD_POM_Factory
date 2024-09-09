package stepDefination;

import org.junit.Assert;

import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import pages.ContactUsPage;
import pages.HomePage;

public class steps extends BaseTest {
	
	HomePage homePage;
	ContactUsPage contactUsPage;
	
	@Before
	public void BeforeScenario() {
		LaunchAndHitUrl();
	}
	
	@After
	public void AfterScenario() {
		CloseBrowser();
	}
	
	@Given("^User Clicked on Contact Us link$")
	public void UserClickOnContactUsLink() {
		homePage = new HomePage(driver);
		homePage.clickOnContactUsLink();
	}
	
	@When("^User enter value in Email Id (.*) field$")
	public void UserEntersEmailId(String emailId) {
		contactUsPage = new ContactUsPage(driver);
		contactUsPage.enterEmailAddress(emailId);
	}
	
	@When("^User enter Order reference (.*) field$")
	public void UserEnterdOrderId(String orderid) {
		contactUsPage = new ContactUsPage(driver);
		contactUsPage.enterOrderReference(orderid);
	}
	
	@Then("^Validate if send button is Enabled$")
	public void UserValidateIfSubmitIsEnabled() {
		contactUsPage = new ContactUsPage(driver);
		Assert.assertTrue(contactUsPage.isSendButtonDisplayed());
	}

}
