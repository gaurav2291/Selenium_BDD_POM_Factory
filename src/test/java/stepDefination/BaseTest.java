package stepDefination;

import org.openqa.selenium.WebDriver;

import utils.LaunchBrowser;

public class BaseTest {
	
	WebDriver driver;
	
	public void LaunchAndHitUrl() {
		LaunchBrowser launchBrowser = new LaunchBrowser();
		driver = launchBrowser.launchBrowserAndHitUrl();
	}
	
	public void CloseBrowser() {
		driver.quit();
	}

}
