const expectedGenerationResponse = {
  code: 'unique-download-hash-here',
  link: 'base-url-here/download/unique-download-hash-here',
};

// const spy = jest.spyOn(sdkGeneration, 'generateSdk').mockImplementation(() => {
//   return expectedGenerationResponse;
// });

// export const generateSdk = jest.fn();
// const mock =  jest.fn().mockImplementation(() => {
// 	console.log("THIS MOCK WAS CALLED")
//   return expectedGenerationResponse;
// });
// export default mock;


export const mockGenerateSdk = jest.fn();
const mock = jest.fn().mockImplementation(() => {
  return {sdkGeneration: mockGenerateSdk};
});

export default mock;