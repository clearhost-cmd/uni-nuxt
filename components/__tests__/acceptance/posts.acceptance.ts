import { get, setupTest } from '@nuxt/test-utils'

describe('ssr', () => {
  setupTest({ server: true })

  it('renders the index page', async () => {
    const { body } = await get('/posts')

    expect(body).toContain('new')
  })
})
