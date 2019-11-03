import { newE2EPage } from '@stencil/core/testing';

describe('app-order', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<app-order></app-order>');

    const element = await page.find('app-order');
    expect(element).toHaveClass('hydrated');
  });

  it('displays the specified name', async () => {
    const page = await newE2EPage({ url: '/order/joseph' });

    const profileElement = await page.find('app-root >>> app-order');
    const element = profileElement.shadowRoot.querySelector('div');
    expect(element.textContent).toContain('Hello! My name is Joseph.');
  });

  // it('includes a div with the class "app-profile"', async () => {
  //   const page = await newE2EPage({ url: '/profile/joseph' });

  // I would like to use a selector like this above, but it does not seem to work
  //   const element = await page.find('app-root >>> app-profile >>> div');
  //   expect(element).toHaveClass('app-profile');
  // });
});
