import { expect, test } from '@playwright/test'

const INTERACTIVE_CHECKBOXES: string[] = [
  'Receive email notifications',
  'Enable dark mode',
  'Subscribe to newsletter',
  'Share usage analytics',
  'Enable two-factor authentication',
  'Auto-save drafts',
];

const READONLY_CHECKED = 'Accept Terms and Conditions';
const READONLY_UNCHECKED = 'Required cookies';

test.describe('validate checkboxes', () => {
  
  test.beforeEach(async ({ page }) => {
    await page.goto('https://nagarjunreddykasu.github.io/web-automation-practice-site/');
    await page.getByRole('link', { name: 'Checkboxes' }).click();
  })

  test('check box validations', async ({ page }) => {
    await expect(page.locator('#page-checkboxes h2')).toContainText('Checkboxes');
    await expect(page.locator('#page-checkboxes p')).toHaveText('Select the options below:');
    await expect(page.getByRole('checkbox')).toHaveCount(8);

    await expect(page.getByRole('button', { name: 'Select All', exact: true })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Deselect All' })).toBeVisible();

    for (const value of INTERACTIVE_CHECKBOXES) {
      const checkbox = page.getByRole('checkbox', { name: value });
      await expect(checkbox).not.toBeChecked();
      await expect(checkbox).toBeEnabled();
    }

    const chkAcceptTerms = page.getByRole('checkbox', { name: READONLY_CHECKED });
    await expect(chkAcceptTerms).toBeChecked();
    await expect(chkAcceptTerms).toBeDisabled();

    const chkRequiredCookies = page.getByRole('checkbox', { name: READONLY_UNCHECKED });
    await expect(chkRequiredCookies).not.toBeChecked();
    await expect(chkRequiredCookies).toBeDisabled();
  })

test("validate the output when selecting a checkbox", async ({ page }) => {
    await page.getByRole("checkbox", {name:"Receive email notifications"}).check();
    await expect(page.locator("#cbOutput")).toContainText("Receive email notifications");
    await expect(page.locator("#cbOutput")).toContainText(`${READONLY_CHECKED}`);
    //await page.pause();
})

  test('validate all the interactive checkboxes are checked on clicking Select All button', async ({ page }) => {
    await page.getByRole('button', { name: 'Select All', exact: true }).click();

    for (const value of INTERACTIVE_CHECKBOXES) {
      const checkbox = page.getByRole('checkbox', { name: value });
      await expect(checkbox).toBeChecked();
      await expect(page.locator('#cbOutput')).toContainText(value);
    }
  })

  test('validate all the interactive checkboxes are unchecked on clicking Deselect All button', async ({ page }) => {
    await page.getByRole('button', { name: 'Select All', exact: true }).click();
    await page.waitForTimeout(3000);
    await page.getByRole('button', { name: 'Deselect All' }).click();

    for (const value of INTERACTIVE_CHECKBOXES) {
      const checkbox = page.getByRole('checkbox', { name: value });
      await expect(checkbox).not.toBeChecked();
    }
  })
})