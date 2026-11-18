
import { test, expect } from '@playwright/test';

const baseURL = 'https://jsonplaceholder.typicode.com';

test.describe('Playwright API Testing', () => {

  // 1. GET API
  test('GET - Retrieve user posts', async ({ request }) => {

    const response = await request.get(`${baseURL}/posts/1`);

    expect(response.status()).toBe(200);

    const responseBody = await response.json();

    console.log('GET Response:', responseBody);

    expect(responseBody.id).toBe(1);
    expect(responseBody.userId).toBe(1);
    expect(responseBody.title).toBeTruthy();

  });

  // 2. POST API
  test('POST - Create new post', async ({ request }) => {

    const response = await request.post(`${baseURL}/posts`, {
      data: {
        title: 'Playwright API Testing',
        body: 'Learning API automation',
        userId: 1
      }
    });

    expect(response.status()).toBe(201);

    const responseBody = await response.json();

    console.log('POST Response:', responseBody);

    expect(responseBody.title).toBe('Playwright API Testing');
    expect(responseBody.body).toBe('Learning API automation');
    expect(responseBody.userId).toBe(1);

  });

  // 3. PUT API
  test('PUT - Update complete post', async ({ request }) => {

    const response = await request.put(`${baseURL}/posts/1`, {
      data: {
        id: 1,
        title: 'Updated Playwright Title',
        body: 'Updated API Testing',
        userId: 1
      }
    });

    expect(response.status()).toBe(200);

    const responseBody = await response.json();

    console.log('PUT Response:', responseBody);

    expect(responseBody.title).toBe('Updated Playwright Title');

  });

  // 4. PATCH API
  test('PATCH - Update post title', async ({ request }) => {

    const response = await request.patch(`${baseURL}/posts/1`, {
      data: {
        title: 'Partially Updated Title'
      }
    });

    expect(response.status()).toBe(200);

    const responseBody = await response.json();

    console.log('PATCH Response:', responseBody);

    expect(responseBody.title).toBe('Partially Updated Title');

  });

  // 5. DELETE API
  test('DELETE - Delete post', async ({ request }) => {

    const response = await request.delete(`${baseURL}/posts/1`);

    expect(response.status()).toBe(200);

    console.log('DELETE Status:', response.status());

  });

});
