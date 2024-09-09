package runner;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src\\test\\java\\Feature\\ContactUsTests.feature",
					glue = {"stepDefination"},
					plugin = {"pretty",
					        "json:target/cucumber_json_reports/home-page.json",
					        "html:target/home-page-html"})
public class ContactUsRunner {

}
