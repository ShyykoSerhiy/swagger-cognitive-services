#Unofficial typescript API for Microsoft Cognitive Services based on swagger api definitions.

This project generates typescript API for Microsoft Cognitive Services based on swagger api defintions. 
All params that are in definitions are typed in the API like queryParameters, pathParameters, and even response types. 

## How It works.

Type definitions for parameters are defined in swagger defintion, so no magick here. For the response types we try to guess the type of successful response by looking into pieces like 

```json
{
  "responses": {
    "200": {
      "description": "...",
      "examples": {
        "application/json": {
          "personGroupId": "sample_group",
          "name": "group1",
          "userData": "User-provided data attached to the person group"
        }
      }
    }
  }
}
```
and using typescript compiler API in order to retrieve the type of the response. Unfortunately because some of the defintions contain invalid response examples types for response object are not always correct.

##How to use 
Just get some of the API like this:
```ts
import { FaceAPI } from 'swagger-cognitive-sevices';

const faceAPI = new FaceAPI();
faceAPI.globalHeaderParameters = {
    ocpApimSubscriptionKey: ocpApimSubscriptionKey
};
```
and start typing, your typescript compatible IDE will show you all the methods with documentation. All method names consist of normalized method title from swagger definitions plus http method name. Each method returns superagent request object. For example to detect faces you can use this method.

```ts
const faces = (await faceAPI.faceDetectPost({}, {}).type('application/octet-stream').send(fs.readFileSync(['path/to/your/image'))).body;

//or

const faces = (await faceAPI.faceDetectPost({}, {}).send({'url': 'https://some.image.url/image.png'}).body;
```