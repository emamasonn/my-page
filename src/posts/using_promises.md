# Why use Keys prop?

<MainImage url='/images/keys.jpeg'/>


<Section>
All this extra stuff your forms need to do is just more JavaScript the browser has to execute while the user is interacting with your form. This often leads to performance problems that are tricky. Sometimes there's a particular component that's the obvious problem and optimizing that one component will fix things and you can go on your merry way.
</Section>


<Section>
All this extra stuff your forms need to do is just more JavaScript the browser has to execute while the user is interacting with your form. This often leads to performance problems that are tricky. Sometimes there's a particular component that's the obvious problem and optimizing that one component will fix things and you can go on your merry way.
</Section>

<Section>
All this extra stuff your forms need to do is just more JavaScript the browser has to execute while the user is interacting with your form. This often leads to performance problems that are tricky. Sometimes there's a particular component that's the obvious problem and optimizing that one component will fix things and you can go on your merry way.
</Section>

## Code


Syntax highlighting

<Code language='javascript' enableCopyToClipboard='true' showLineNumbers='true'>
function successCallback(result) {
  console.log(\`Audio file ready at URL: ${result}\`);
}
function failureCallback(error) {
  console.error(\`Error generating audio file: ${error}\`);
}
createAudioFileAsync(audioSettings, successCallback, failureCallback);
</Code>

<Code enableCopyToClipboard='false' >
index.js:1 Warning: Each child in a list should have a unique "key" prop.
Check the render method of App. See https:reactjs.org/link/warning-keys for more information.
    at li
    at App (http:localhost:3000/static/js/30.chunk.js:48:75)
</Code>
