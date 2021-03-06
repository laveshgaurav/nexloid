import firebase from "firebase/app";
import flamelink from "flamelink";
import "firebase/database";
import "firebase/storage";

class _ExternalService {
  constructor() {
    this.apiDomain = process.env.REACT_APP_API_BASE || "";
    
    // zoho globals
    this.zohoLeadCreate=process.env.REACT_APP_ZOHO_LEAD_API;

    this.firebaseConfig = {
      apiKey: "AIzaSyBPuRk9rkSepO4vxkDhx_YJORSLGfm7EDU",
      authDomain: "nexloid.firebaseapp.com",
      databaseURL: "https://nexloid-default-rtdb.firebaseio.com",
      projectId: "nexloid",
      storageBucket: "nexloid.appspot.com",
      messagingSenderId: "130466413773",
      appId: "1:130466413773:web:873bbec861046b0ea33d84",
    };

    this.firebaseApp = firebase.initializeApp(this.firebaseConfig);
    // this.db = firebase.firestore();
    this.app = flamelink({ firebaseApp: this.firebaseApp });
  }

  async getLatestArticles() {
    return await this.app.content
      .get("articles")
      .then(async (blogPosts) => {
        let result = [];
        for (let key in blogPosts) {
          if (result.length < 4) {
            let { id, slug, summary, title } = blogPosts[key];
            let genResponse = {
              id: id,
              title: title,
              summary: summary,
              permalink: slug,
            };

            result.push(genResponse);
          } else {
            break;
          }
        }
        // console.log(result);
        return result.reverse();
      })
      .catch((error) =>
        console.error(
          "Something went wrong while retrieving all the content. Details:",
          error
        )
      );
  }

  async getAllArticles() {
    return await this.app.content
      .get("articles")
      .then(async (blogPosts) => {
        // console.log(blogPosts);
        let result = [];
        for (let key in blogPosts) {
          let { id, date, slug, summary, title } = blogPosts[key];
          let genResponse = {
            id: id,
            title: title,
            summary: summary,
            permalink: slug,
            date: new Date(date).toDateString(),
          };

          result.push(genResponse);
        }
        // console.log(result);
        return result.reverse();
      })
      .catch((error) =>
        console.error(
          "Something went wrong while retrieving all the content. Details:",
          error
        )
      );
  }

  async getArticleById(articleId) {
    return await this.app.content
      .getByField("articles", "slug", articleId)
      .then(async (blogPosts) => {
        let result = [];
        for(let key in blogPosts) {
            let { author, content,date, featuredImage, tags, id, seo, slug, title, jsonLDSchema} = blogPosts[key];
            console.log("seo", seo);
            let genResponse = {
              id: id,
              content: content,
              author: author,
              title: title,
              permalink: slug,
              tags: tags,
              seo: seo,
              jsonLDSchema: jsonLDSchema,
              images : {
                headerImage: await this.fetchImage(featuredImage[0])
              },
              date: new Date(date).toDateString()
            };
    
            result.push(genResponse);
            
        }
        return result;
      })
      .catch((error) =>
        console.error(
          "Something went wrong while retrieving all the content. Details:",
          error
        )
      );
  }

  // case studies / works
  async getLatestWorks() {
    return await this.app.content
      .get("caseStudies")
      .then(async (articles) => {
        let result = [];
        for (let key in articles) {
          if (result.length < 3) {
            let { id, slug, summary, title, featuredImage } = articles[key];
            let genResponse = {
              id: id,
              title: title,
              summary: summary,
              permalink: slug,
              featuredImage: await this.fetchImage(featuredImage[0]),
            };

            result.push(genResponse);
          } else {
            break;
          }
        }
        // console.log(result);
        return result;
      })
      .catch((error) =>
        console.error(
          "Something went wrong while retrieving all the content. Details:",
          error
        )
      );
  }

  async getAllWorks() {
    return await this.app.content
      .get("caseStudies")
      .then(async (articles) => {
        console.log(articles);
        let result = [];
        for (let key in articles) {
          let { id, date, slug, summary, title } = articles[key];
          let genResponse = {
            id: id,
            title: title,
            summary: summary,
            permalink: slug,
            date: new Date(date).toDateString(),
          };

          result.push(genResponse);
        }
        // console.log(result);
        return result.reverse();
      })
      .catch((error) =>
        console.error(
          "Something went wrong while retrieving all the content. Details:",
          error
        )
      );
  }

  async getWorkById(articleId) {
    // console.log(articleId);
    return await this.app.content
      .getByField("caseStudies", "slug", articleId)
      .then(async (articles) => {
        console.log(articles);
        let result = [];
        for(let key in articles) {
            let { author, content,date, featuredImage, tags, id, seo, slug, title, jsonLDSchema} = articles[key];
            let genResponse = {
              id: id,
              content: content,
              author: author,
              title: title,
              permalink: slug,
              tags: tags,
              seo: seo,
              jsonLDSchema: jsonLDSchema,
              featuredImage: await this.fetchImage(featuredImage[0]),
              date: new Date(date).toDateString()
            };
    
            result.push(genResponse);
            
        }
        return result;
      })
      .catch((error) =>
        console.error(
          "Something went wrong while retrieving all the content. Details:",
          error
        )
      );
  }

  // services

  async getAllServices() {
    return await this.app.content
      .get("services")
      .then(async (articles) => {
        console.log(articles);
        let result = [];
        for (let key in articles) {
          let { id, serviceName, slug, serviceIcon } = articles[key];
          let genResponse = {
            id: id,
            title: serviceName,
            permalink: slug,
            featuredImage: await this.fetchImage(serviceIcon[0], "240"),
          };

          result.push(genResponse);
        }
        // console.log(result);
        return result;
      })
      .catch((error) =>
        console.error(
          "Something went wrong while retrieving all the content. Details:",
          error
        )
      );
  }

  async getServiceById(serviceId) {
    return await this.app.content
      .getByField("services", "slug", serviceId)
      .then(async (details) => {
        let result = [];
        var imageFetch = (imageID) => this.fetchImage(imageID);

        for (let key in details) {
          let {
            serviceName,
            slug,
            introText,
            headerImage,
            toolsRequired,
            id,
            date,
            tags
          } = details[key];
          var genResponse = {
            id: id,
            title: serviceName,
            introText: introText,
            permalink: slug,
            tags: tags,
            headerImage: await imageFetch(headerImage[0]),
            date: new Date(date).toDateString(),
            tools: await this.ToolImageProcessing(toolsRequired),
          };

          result.push(genResponse);
        }

        return result;
      })
      .catch((error) =>
        console.error(
          "Something went wrong while retrieving all the content. Details:",
          error
        )
      );
  }

  async getAllCareers() {
    return await this.app.content
      .get("careers")
      .then(async (careers) => {
        let result = [];
        for (let key in careers) {
          let { id, positionName, jobDescription } = careers[key];
          let genResponse = {
            id: id,
            positionName: positionName,
            jobDescription: jobDescription,
          };

          result.push(genResponse);
        }
        // console.log(result);
        return result;
      })
      .catch((error) =>
        console.error(
          "Something went wrong while retrieving all the content. Details:",
          error
        )
      );
  }

  async getRelatedArticlesByTag(refTags, articleID) {
    return await this.app.content.get('articles')
      .then(async blogPosts => {
        let result = [];
        for(let key in blogPosts) {
          if(result.length < 3) {
            let { id, date, slug, summary, title, tags } = blogPosts[key];

            if(refTags.some(r=>tags.indexOf(r) >=0) && id!==articleID) {
              let genResponse = {
                id: id,
                title: title,
                permalink: slug,
                summary: summary,
                date: new Date(date).toDateString()
              };
    
              result.push(genResponse);
            }
            
           } else {
             break;
           }
        }
        // console.log(result);
        return result;
      })
      .catch(error => console.error('Something went wrong while retrieving all the content. Details:', error));
  }

  async getRelatedWorksByTag(refTags) {
    console.log(refTags);
    return await this.app.content.get("caseStudies")
      .then(async articles => {
        let result = [];
        for(let key in articles) {
          if(result.length < 3) {
            let { id, date, slug, summary, title, tags } = articles[key];

            if(refTags && refTags.some(r=>tags.indexOf(r) >=0)) {
              let genResponse = {
                id: id,
                title: title,
                permalink: slug,
                summary: summary,
                date: new Date(date).toDateString()
              };
    
              result.push(genResponse);
            }
            
           } else {
             break;
           }
        }
        // console.log(result);
        return result;
      })
      .catch(error => console.error('Something went wrong while retrieving all the content. Details:', error));
  }


  async ToolImageProcessing(arr) {
    return Promise.all(
      arr.map(async (data, index) => {
        return {
          toolName: data.toolName,
          toolDescription: data.toolDescription,
          toolImage: await this.fetchImage(data.toolImage[0]),
        };
      })
    );
  }

  async fetchImage(fileId, size) {
    return await this.app.storage
      .getURL(fileId)
      .then((url) => url)
      .catch((error) => console.log(error));
  }

  // async refreshToken() {
  //   let formData = new URLSearchParams();
  //   formData.append('refresh_token', this.zohoRefreshToken);
  //   formData.append('client_id', this.zohoClientId);
  //   formData.append('client_secret', this.zohoClientSecret);
  //   formData.append('grant_type', 'refresh_token');

  //   let token = await this._dataRequest(`${this.zohoAccountsDomain}/token`, {
  //     method: 'POST',
  //     body: formData
  //   });

  //   return token.access_token;
  // }

  async createLead(firstname, lastname, company, email, phone, serviceRequired) {
    let urlparam = new URLSearchParams({
      firstName: firstname,
      lastName: lastname,
      company: company,
      email: email,
      phone: phone,
      serviceRequired: serviceRequired
    })
    let res = await this._dataRequest(`${this.zohoLeadCreate}?${urlparam}`, {
      method: 'GET'
    });
    
    return res;
  }
  async _dataRequest(path, options) {
    // performs api calls sending the required authentication headers
      // const headers = {
      //     'Content-Type': 'application/x-www-form-urlencoded'
      // }

      // if (typeof options.body === 'object') options.body = options.body;

      const result = await fetch(`${path}`, {
          ...options
      });

      try {
          this._checkStatus(result);
          return result.json();
      } catch (err) {
          return await this._handleError(err);
      }
  }

  async _handleError(err) {
      // Extracts and returns a rejected promise, with the error message (if any)
      if (!!err.response) {
          const { response } = err;
          const json = await response.json();

          if (json) return Promise.reject(json.message);
          else return Promise.reject(response.statusText);
      }

      return Promise.reject(err);
  }

  _checkStatus(response) {
      // raises an error in case response status is not a success
      if (response.status >= 200 && response.status < 300) { // Success status lies between 200 to 300
          return response
      } else {
          const error = new Error(response.statusText)
          error.response = response
          throw error
      }
  }
}

const ExternalService = new _ExternalService();
export default ExternalService;
