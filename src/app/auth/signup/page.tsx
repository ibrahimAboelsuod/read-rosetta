import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Read Rosetta | Signup',
};

export default function Signup() {
  return (
    <>
      <div className='row justify-content-center'>
        <div className='col-lg-6'>
          <div className='card shadow-lg border-0 rounded-lg mt-5'>
            <div className='card-header'>
              <h3 className='text-center font-weight-light my-4'>Signup</h3>
            </div>
            <div className='card-body'>
              <form>
                <div className='row mb-3'>
                  <div className='col-md-6'>
                    <div className='form-floating mb-3 mb-md-0'>
                      <input
                        type='text'
                        className='form-control'
                        id='inputFirstName'
                        placeholder='First Name'
                      />
                      <label htmlFor='inputFirstName'>First Name</label>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-floating'>
                      <input
                        type='text'
                        className='form-control'
                        id='inputLastName'
                        placeholder='Last Name'
                      />
                      <label htmlFor='inputLastName'>Last Name</label>
                    </div>
                  </div>
                </div>
                <div className='form-floating mb-3'>
                  <input
                    type='email'
                    className='form-control'
                    id='inputEmail'
                    placeholder='name@example.com'
                  />
                  <label htmlFor='inputEmail'>Email address</label>
                </div>
                <div className='form-floating mb-3'>
                  <input
                    type='password'
                    className='form-control'
                    id='inputPassword'
                    placeholder='Password'
                  />
                  <label htmlFor='inputPassword'>Password</label>
                </div>
                <div className='form-floating mb-3'>
                  <input
                    type='password'
                    className='form-control'
                    id='inputConfirmPassword'
                    placeholder='Confirm Password'
                  />
                  <label htmlFor='inputConfirmPassword'>Confirm Password</label>
                </div>
                <div className='d-flex align-items-center justify-content-between mt-4 mb-0'>
                  <button className='btn btn-primary' type='submit'>
                    Signup
                  </button>
                </div>
              </form>
            </div>
            <div className='card-footer text-center'>
              <div className='small'>
                Already have an account? <a href='login'>Login</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
