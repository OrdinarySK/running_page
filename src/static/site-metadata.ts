interface ISiteMetadataResult {
  siteTitle: string;
  siteUrl: string;
  description: string;
  logo: string;
  navLinks: {
    name: string;
    url: string;
  }[];
}

const data: ISiteMetadataResult = {
  siteTitle: 'Running Page',
  siteUrl: 'https://run.ordinarysk.top/',
  logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTtc69JxHNcmN1ETpMUX4dozAgAN6iPjWalQ&usqp=CAU',
  description: 'ordinarysk runing',
  navLinks: [
    {
      name: 'Blog',
      url: 'https://www.ordinarysk.top/',
    },
    {
      name: 'About',
      url: 'https://www.ordinarysk.top/',
    },
  ],
};

export default data;
