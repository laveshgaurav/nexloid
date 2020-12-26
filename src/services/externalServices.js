import firebase from 'firebase/app';
import flamelink from 'flamelink';
import 'firebase/database';
import 'firebase/storage';

class _ExternalService {
  constructor () {
    this.apiDomain = (process.env.REACT_APP_API_BASE || '');

    this.firebaseConfig = {
      apiKey: "AIzaSyBPuRk9rkSepO4vxkDhx_YJORSLGfm7EDU",
      authDomain: "nexloid.firebaseapp.com",
      databaseURL: "https://nexloid-default-rtdb.firebaseio.com",
      projectId: "nexloid",
      storageBucket: "nexloid.appspot.com",
      messagingSenderId: "130466413773",
      appId: "1:130466413773:web:873bbec861046b0ea33d84"
    };
    
    this.firebaseApp = firebase.initializeApp(this.firebaseConfig);
    // this.db = firebase.firestore();
    this.app = flamelink({firebaseApp: this.firebaseApp});
  }

  async getLatestArticles() {
    return await this.app.content.get('articles')
      .then(async blogPosts => {
        let result = [];
        for(let key in blogPosts) {

          if(result.length < 6) {
            let { id, slug, summary, title} = blogPosts[key];
            let genResponse = {
              id: id,
              title: title,
              summary: summary,
              permalink: slug
            };

            result.push(genResponse);
          } else {
            break;
          }
        }
        // console.log(result);
        return result;
      })
      .catch(error => console.error('Something went wrong while retrieving all the content. Details:', error));
  }

  async getAllArticles() {
    return await this.app.content.get('articles')
      .then(async blogPosts => {
        console.log(blogPosts);
        let result = [];
        for(let key in blogPosts) {
            let { id, date, slug, summary, title} = blogPosts[key];
            let genResponse = {
              id: id,
              title: title,
              summary: summary,
              permalink: slug,
              date: new Date(date).toDateString()
            };

            result.push(genResponse);
        }
        // console.log(result);
        return result;
      })
      .catch(error => console.error('Something went wrong while retrieving all the content. Details:', error));
  }

  async getArticleById(articleId) {
    return await this.app.content.getByField('articles', 'slug', articleId)
      .then(async blogPosts => {
        let result = [];
        for(let key in blogPosts) {
            let { author, content,date, featuredImage, tags, id, seo, slug, title} = blogPosts[key];
            console.log("seo", seo);
            let genResponse = {
              id: id,
              content: content,
              author: author,
              title: title,
              permalink: slug,
              tags: tags,
              seo: seo,
              images : {
                headerImage: await this.fetchImage(featuredImage[0])
              },
              date: new Date(date).toDateString()
            };
    
            result.push(genResponse);
            
        }
        return result;
      })
      .catch(error => console.error('Something went wrong while retrieving all the content. Details:', error));
  }

  async fetchImage(fileId) {
    return await this.app.storage.getURL(fileId)
    .then(url => url)
    .catch(error => console.log(error));
  }
}


const ExternalService = new _ExternalService();
export default ExternalService;

// let { author, date, featuredImage, tags, id, seo, slug, summary, title} = blogPosts[key];
//           let genResponse = {
//             id: id,
//             author: author,
//             title: title,
//             summary: summary,
//             permalink: slug,
//             tags: tags,
//             seo: seo,
//             images : {
//               headerImage: await this.fetchImage(featuredImage[0])
//             },
//             date: new Date(date).toDateString()
//           };