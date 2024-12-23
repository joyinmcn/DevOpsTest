const fdk=require('@fnproject/fdk');

fdk.handle(function(input){
  let name = 'World';
  if (input.name) {
    name = input.name;
  }
  console.log('\nInside Node Hello World function message for test of apprval flow through mail')
  return {'message': 'Hello ' + name}
})
