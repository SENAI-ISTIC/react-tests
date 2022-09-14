import { AuthProvider, useAuth } from '@/core/contexts/auth';
import { renderHook, act } from '@testing-library/react-hooks';

describe('Auth hook', () => {
    it('should be able to setSession in user first time', async () => {
        const apiResponse = {
            user: {
              id: '1',
              name: 'ElderGr',
              email: 'gabriel@email.com',
            },
            tokens: {
              accessToken: '123',
              refreshToken: '123',
              tokenType: 'Bearer',
              expirateAt: 1234578,
              idToken: null,
            },
        }

        const authSetStorageSpy = jest.spyOn(Storage.prototype, 'setItem')

        const { result, waitForNextUpdate } = renderHook(() => useAuth(), {
            wrapper: AuthProvider
        })

        act(() => {
          result.current.setSession(apiResponse)
        })

        await waitForNextUpdate()

        expect(authSetStorageSpy).toHaveBeenCalled()
  })
})