import React from 'react';
import junhan from './images/junhan.JPG';
import yongjian from './images/yongjian.jpg';
import yizhong from  './images/yizhong.jpeg'
import ziyue from  './images/ziyue.jpeg'
import ProfileCard from './components/ProfileCard';

const ContactPage = () => {
  return (
    <div className="container mt-5 my-5 text-center">
      <h1 style={{  fontFamily: "Magilio" , fontWeight: 'bold' }}>Armchair Coders</h1>
      <div className="my-5 row">
        <ProfileCard image={yizhong} name="Chen Yizhong" description={["I love coding!", <br/>, "Contact him at "]}  contact="yizhong187@gmail.com"></ProfileCard>
        <ProfileCard image={ziyue} name="Chu Ziyue" description={["Wannabe Coder." , <br/>, "Contact him at "]}contact="chuziyue0928@gmail.com"></ProfileCard>
        <ProfileCard image={junhan} name="Ho Jun Han" description="Did not go to Harvard. Contact him at " contact="hojunhan49@gmail.com"></ProfileCard>
        <ProfileCard image={yongjian} name="Huang Yongjian" description={["Here to rock your world.", <br/>, "Contact him at "]} contact="huangyj2002@gmail.com"></ProfileCard>
      </div>
    </div>
  );
};

export default ContactPage;
