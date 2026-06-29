/*
Auto Retrying assertions:

//To assert the web page tittle

await expect(page).toHaveTitle("expected_title");

//To assert the web page url
await expect(page).toHaveURL("<url>");

//To assert an element is visible
await expect(element).toBeVisible();

//To assert an element matches text
await expect(element).toHaveText("<message>");

//To assert an element contains text
await expect(element).toContainText("partialtext");

//To assert an element is editable or enabled or disabled
await expect(element).toBeEditable();
await expect(element).toBeEnabled();
await expecte(element).toBeDisabled();

//TO assert check box or radio button is checked
await expect(element).toBeChecked();

//To assert an element is focused
await expect(element).toBeFocused();

//TO assert an element list has number of elements
await expect(element).ToHaveCount(<number>);

//To assert an element has given input value
await expect(element).toHaveValue("<India>");

//To assert the selected multiple values from multi select drop down list
await expect(element).toHaveValues(["", "",""]);

//Visual testing
await expect(element).toHaveScreenshot("image.png");
await expect(element).toMatchAriaSnapshot("expectedsnapshot");



await expect(element).not.toBeChecked();




*/