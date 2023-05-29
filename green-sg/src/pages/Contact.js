import React from 'react';
import junhan from './images/junhan.JPG';
import yongjian from './images/yongjian.jpg';
import ProfileCard from './components/ProfileCard';

const ContactPage = () => {
  return (
    <div className="container mt-5 my-5 text-center">
      <h1 style={{ fontFamily: 'Arial', fontWeight: 'bold' }}>Armchair Coders</h1>
      <div className="my-5 row">
        <ProfileCard image={yongjian} name="Chen Yizhong" description="I am here to rock your world. Contact him at " contact="huangyj2002@gmail.com"></ProfileCard>
        <ProfileCard image={yongjian} name="Chu Ziyue" description="I am here to rock your world. Contact him at " contact="huangyj2002@gmail.com"></ProfileCard>
        <ProfileCard image={junhan} name="Ho Jun Han" description="Did not go to Harvard. Contact him at " contact="hojunhan49@gmail.com"></ProfileCard>
        <ProfileCard image={yongjian} name="Huang Yongjian" description="I am here to rock your world. Contact him at " contact="huangyj2002@gmail.com"></ProfileCard>
      </div>
    </div>
  );
};

export default ContactPage;
