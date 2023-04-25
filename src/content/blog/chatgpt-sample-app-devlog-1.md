---
author: Luchini
pubDatetime: 2023-04-25T14:20:53Z
title: Devlog 1 - Teaching ChatGPT to Chop Samples like Kanye
postSlug: chatgpt-sampler-devlog1
featured: true
draft: false
tags:
  - chatgpt
  - ai
  - coding
ogImage: ""
description: Can you use Chat GPT to make a sample chopper? Let's find out.
---

As a music producer the plugin game fascinates me. Plugins like OTT or Fabfilters improve your sound in an instant. Others like Cthulhu or Scaler speed up your workflow and provide inspiration in a pinch.

I want to make a plugin that helps artists speed up sample auditions. Sample auditioning is simply finding patterns of sample chops that sound good together.

## The problem

I love to use samples in my songs. Playing sample chops live on my SP-404 MK2 is a great way to find inspirational patterns. But I don't always have a sampler with me. And I don't always have the patience to import and trim them in my SP404.

I want to make an app that chops and randomly sequences samples then plays back those sequences for you. 

## The toolkit
- [VisualStudio Code] (https://code.visualstudio.com/) as my code editor
- React as my coding language. 
- [Chatgpt](https://chat.openai.com/chat) from [OpenAI](https://openai.com/) as my instructor



### First prompt
>can you help me create an app for music producers that takes samples, chops them up then plays chops in different sequences for the user. The user can select how long the chops will be. And the user can save sequences they like
### ChatGPT's response
>Sure, I can help you with that!

>Here are the high-level steps you can follow to create an app for music producers that does the tasks you've described:

- Import the audio samples into your app, either by allowing the user to select files or by including pre-loaded sample packs.
- Use a library like aubio or librosa to chop up the samples into smaller pieces based on the user's desired length. You can use a GUI framework like Qt or wxWidgets to allow the user to select the desired chop length.
- Store the chopped samples in memory, and use a sequencing library like OpenSequnce or JUCE's Sequencer to create different sequences of samples based on user input.
- Use a GUI framework to allow the user to save their favorite sequences, and store the sequences either in a local file or in a database.
- Finally, use an audio playback library like portaudio or RtAudio to play back the chopped samples in the chosen sequences.
- Here's some example code that demonstrates how you could use aubio to chop up an audio file into smaller pieces:

Okay, the frameworks ChatGPT suggested use C++ which I don't know. So we're going to make a react web app for the prototype. Once we get the functionality down we can worry about porting it to a VST. 

It might turn out to be more useful as a web and mobile app anyway.


From my research I think I would use FL Studio's sdk or an open source library to make the VST. FL also offers [FL Flowstone](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Synthmaker.htm#:~:text=FL%20FLowstone%20(FLowstone)%20includes%20the,cards%20webcams%20and%20audio%20hardware.) if you'd like to make your own synth, which is cool.

## Create react app
I've created a boilerplate react app and asked ChatGPT to rewrite my App.js which is the main file that controls the app. 

ChatGPT obliges and sends me this
```
import React, { useState } from 'react';
import './App.css';
import Dropzone from 'react-dropzone';

function App() {
  const [file, setFile] = useState(null);

  const handleFileSelect = (files) => {
    if (files.length > 0) {
      setFile(files[0]);
    } else {
      setFile(null);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Sample Slicer App</h1>
      </header>
      <main>
        <Dropzone onDrop={handleFileSelect} accept=".wav">
          {({ getRootProps, getInputProps }) => (
            <section>
              <div {...getRootProps()}>
                <input {...getInputProps()} />
                <p>Drag and drop a WAV file here, or click to select a file</p>
              </div>
            </section>
          )}
        </Dropzone>
        {file && <p>Selected file: {file.name}</p>}
      </main>
    </div>
  );
}

export default App;
```

Now I've got to install and figure out this Dropzone package. Dropzone it turns out it what lets you upload a file to an app.

So far, so good. I ask Chatgpt to add inputs for BPM and Key and it does that too. The app looks pretty nice!
![screenshot of the app](/public/assets/sample-scraper-screenshot.png)

## AI ADHD

Here's where things start to go downhill...

So I've pretty much got the basic UX of the app set up, now I need to write code that actually chops and manipulates the uploaded sample.

ChatGPT loves to pull in outdated and sometimes deprecated packages from NPM, which isn't ideal. These packages are like add-ons you need to install to make your app work. 

It also loves to use different packages for every little function. And it loves to forget what it names variables and functions.

In the end it had me create 4 extra react components with incompatible functions and variables. It was a mess.

## On the next episode of musical coding

Is my strategy to improve at prompting ChatGPT? No. It's too tedious to constantly correct and coax it. 

I am going to just pay the $20 for GPT-4, an upgraded language model. If I'm smart enough, I'll figure out how to connect it to my code editor via API so it can more easily read my code.

## Thanks for reading
That's it for Devlog 1. Please share this article with your friends or on Twitter or Reddit if you enjoyed it! Stay tuned for part 2.



