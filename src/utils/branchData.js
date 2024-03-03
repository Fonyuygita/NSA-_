import {BsWhatsapp, BsFacebook, BsTwitterX, BsLinkedin} from "react-icons/bs"


// Create an array of objects to store branches and their information
export const branches = [
    {
      id: 1,
      name: 'Youonde Branch',
      description: 'This is the description of branch A',
      image: '/ynde.png',
      executive: {
        name: 'Alice',
        title: 'President',
        info: 'This is some info about Alice',
        social: {
          twitter: 'https://twitter.com/alice',
          linkedin: 'https://linkedin.com/alice',
          lImage:<BsLinkedin/>,
          fImage:<BsFacebook/>,
          wImage:<BsWhatsapp/>
        },
        image:"/a1.png",
        Email:"branch@gmail.com", 
      },
    },
    {
      id: 2,
      name: 'Douala Branch ',
      description: 'This is the description of branch B',
      image: '/douala.jpg',
      executive: {
        name: 'Bob',
        title: 'President',
        info: 'This is some info about Bob',
        social: {
          twitter: 'https://twitter.com/bob',
          linkedin: 'https://linkedin.com/bob',
          lImage:<BsLinkedin/>,
          fImage:<BsFacebook/>,
          wImage:<BsWhatsapp/>
        },
        image:"/e3.png",
        Email:"branch@gmail.com", 
      },
    },
    {
      id: 3,
      name: 'Bamenda Branch',
      description: 'This is the description of branch C',
      image: '/bamenda.png',
      executive: {
        name: 'Charlie',
        title: 'CEO of Branch C',
        info: 'This is some info about Charlie',
        social: {
          twitter: 'https://twitter.com/charlie',
          linkedin: 'https://linkedin.com/charlie',
        },
      },
    },

    {
      id: 4,
      name: 'Bambili Branch',
      description: 'This is the description of branch D',
      image: '/bambili.png',
      executive: {
        name: 'Charlie',
        title: 'CEO of Branch C',
        info: 'This is some info about Charlie',
        social: {
          twitter: 'https://twitter.com/charlie',
          linkedin: 'https://linkedin.com/charlie',
          lImage:<BsLinkedin/>,
          fImage:<BsFacebook/>,
          wImage:<BsWhatsapp/>
        },
        image:"/e2.png",
        Email:"branch@gmail.com", 
      },
    },

    {
      id: 5,
      name: 'Branch E',
      description: 'This is the description of branch E',
      image: '/contactUs.png',
      executive: {
        name: 'Charlie',
        title: 'CEO of Branch C',
        info: 'This is some info about Charlie',
        social: {
          twitter: 'https://twitter.com/charlie',
          linkedin: 'https://linkedin.com/charlie',
          lImage:<BsLinkedin/>,
          fImage:<BsFacebook/>,
          wImage:<BsWhatsapp/>
        },
        image:"/a1.png",
        Email:"branch@gmail.com", 
      },
    },


    {
      id: 6,
      name: 'Branch F',
      description: 'This is the description of branch F',
      image: '/contactUs.png',
      executive: {
        name: 'Charlie',
        title: 'CEO of Branch C',
        info: 'This is some info about Charlie',
        social: {
          twitter: 'https://twitter.com/charlie',
          linkedin: 'https://linkedin.com/charlie',
          lImage:<BsLinkedin/>,
          fImage:<BsFacebook/>,
          wImage:<BsWhatsapp/>
        },
        image:"/e1.png",
        Email:"branch@gmail.com", 
      },
    },
  ];