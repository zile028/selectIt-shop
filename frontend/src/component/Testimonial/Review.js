import { useState } from 'react';
import reviews from './clientsData';
function Reviews() {
  const [activeCircle, setActiveCircle] = useState(1);

  const usersPerPage = 3;
 
const usersBySection = [
  reviews.slice(0, usersPerPage),
  reviews.slice(usersPerPage, usersPerPage * 2),
  reviews.slice(usersPerPage * 2, usersPerPage * 3),
];
  // const sectionClasses = `user-section active-section-${activeCircle}`;

  return (
    <article className='review'>
      {usersBySection[activeCircle].map(user => (
        <div className='client' key={user.id}>
        <div className='info-img'>
          <p className='info'>{user.text}</p>
        <div className='img-container'>
          <img src={user.image} alt={user.name} className='person-img' />
        </div>

        </div>
          <h4 className='author'>{user.name}</h4>
          <p className='job'>{user.job}</p>
        </div>
      ))}
      <div className="button-container">
        <button className={activeCircle === 0 ? 'active' : ''} onClick={() => setActiveCircle(0)}>  <div className='circle'
    style={{
      backgroundColor: activeCircle === 0 ? 'white' : '#1DAAA3',
    }}
  >
  </div></button>
        <button className={activeCircle === 1 ? 'active' : ''} onClick={() => setActiveCircle(1)}><div className='circle'   style={{
      backgroundColor: activeCircle === 1 ? 'white' : '#1DAAA3',
    }}></div></button>
        <button className={activeCircle === 2 ? 'active' : ''} onClick={() => setActiveCircle(2)}><div className='circle'   style={{
      backgroundColor: activeCircle === 2 ? 'white' : '#1DAAA3',
    }}></div></button>
      </div>
    </article>
  );
}
  export default Reviews
