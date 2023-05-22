import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Read Rosetta | Login',
};

export default function Login() {
  return (
    <>
      <div className='row justify-content-center'>
        <div className='col-lg-5'>
          <div className='card shadow-lg border-0 rounded-lg mt-5'>
            <div className='card-header'>
              <h3 className='text-center font-weight-light my-4'>Login</h3>
            </div>
            <div className='card-body'>
              <form>
                <div className='form-floating mb-3'>
                  <input
                    type='email'
                    className='form-control'
                    id='loginEmail'
                    name='loginEmail'
                    placeholder='name@example.com'
                  />
                  <label htmlFor='loginEmail'>Email address</label>
                </div>
                <div className='form-floating mb-3'>
                  <input
                    type='password'
                    className='form-control'
                    id='loginPassword'
                    name='loginPassword'
                    placeholder='Password'
                  />
                  <label htmlFor='loginPassword'>Password</label>
                </div>
                <div className='d-flex align-items-center justify-content-between mt-4 mb-0'>
                  <button className='btn btn-primary' type='submit'>
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
