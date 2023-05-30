import React from 'react'

const BoxedDisplay = () => {
    return (
      <div className="boxed-display">
        <div className="content" >
          <h1>Introducing GoGreen 365,<br/>a pathway towards sustainable living</h1>
        </div>
      </div>
    );
  }

const BodyParagraph = () =>{
    return (

        <div className='Container'>
            <p className='paragraph'>GoGreen 365 is a web app developed to empower individuals in Singapore to make daily choices that have a positive impact on the environment. As the team behind GoGreen 365, we believe that every small action counts when it comes to protecting our planet and by engaging in sustainable activities, you can do your part to contribute to the collective effort of combating climate change.</p>
            <p className='paragraph'>GoGreen 365 offers a wide range of environmentally friendly activities for you to choose from. Whether it's dining at a sustainable restaurant, recycling your used bottles and cans at designated points, or exploring exhibitions to learn more about environmental conservation and sustainable development, there is something for everyone.</p>
            <p className='paragraph'>Using the app, you are not only making a difference but also getting rewarded for your efforts. Each time you participate in an activity, you earn points that can be used to redeem exciting gifts and vouchers. We believe in incentivizing positive actions and making the pursuit of sustainable living a rewarding experience.</p> 
            <p className='paragraph'>GoGreen 365 gets its name from the idea that every day presents an opportunity to make a difference. We encourage you to take active steps each day to reduce your environmental impact. With 365 days in a year, we believe that by making sustainable choices every day, we can collectively create a significant impact on our planet and a more sustainable world for generations to come.</p>
            <p className='paragraph'>Join us on this journey towards a greener and more sustainable future. Register at GoGreen 365 today and start making a difference, one day at a time. Together, we can shape a better world for ourselves and future generations.</p>
        </div>

    )
}

const Home = () => {
    return (
        <div>
            <BoxedDisplay/>
            <BodyParagraph/>
        </div>
    )
}

export default Home