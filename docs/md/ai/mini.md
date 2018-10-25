# Machine Insight Network Interpreter

_This page has been reserved for extra documentation for the SIDN. It is currently being edited, proof-read, and updated_

## Introduction

To increase the confidence of how our system will work, instead of creating one algorithm that is connected to a whole set of devices, we want to have smaller algorithms that work together to come to a consensus. Specifically, we want them to come to a consensus by being called upon by human actors, through the controllable interfaces of our apps. To do this, we need a special protocol that allows users to plugin to other smart devices, creating a context of meaning. In this context, meanings of words, sentences and situations are calculated for those involved in the "discussion". 

### Problem
In order to speed up the learning process for each device which hosts a real-time machine learning process, each device should be able to download the data it requires to improve its accuracy in given situations. However, as common communication patterns emerge between different users, it's important that we have a way to create a readily available "popular" context that individuals users can stay in sync with. This is comparable to a common alphabet that can continually be updated to provide accurate translations of words and phrases between users with different writing styles and as far as users speaking in different languages. This can be considered a digital meta-language which enables back-and-forth translations between languages, dialects, and styles. 

### Solution
To solve this, we are "fingerprinting" communications between describable profiles so that when two users with similar styles speak to one another, they can automatically use predictive communication patterns without having to train the models in their devices again to reach the same amount of reliability.  Consequently, at least one device in the network will need to centralize this data. Due to privacy issues with recording and storing writing from device keyboards, storing conversations is out of the question. 

Furthermore, the information stored cannot actually contain information about user's unless they have explicitly given permission (through the app dialogues) for their information to be fingerprinted. By the time the historical record of conversations reaches the database, it must be already be aggregated as a "common language" for definable context. This means users who want to personalise their predictive text in different contexts (work, home, private, professional) and with differing levels of nuance, need to handle most of their private fingerprints in real-time, without needing the global context. These are edge scenarios with respect to the central node. As the data in edge scenarios requires more detail and historical context, it makes sense to store this information on the device, for quick access between two users when they need to trade their secret keys. 

For this reason, a decentralized peer-to-peer layer is required to reduce the need for storing extensive information about users. Although a centralized back-up service can be offered to users who are more concerned about longevity of their predictive patterns, such a network should be able to function well without this added service, at least in Realtime communication between users in a community. 


## Privacy-First P2P Architechture

In a peer-to-peer network, the clusters of users who speak to one another will come as given. No extra computation will be required for a user's device to know where in the network of contexts a given conversation belongs, provided both users can access the central node for downloading the fingerprints that most closely resembles profile of the person they are speaking to. This will allow the user's device to accurately translate communication between contexts without downloading the personal data of their conversational partner. 

In a situation where the central node, or the mediator is compromised, user's will only be able to download the fingerprints of users who they have explicitly added to their personal network, a file that is kept on the device of user. As this architecture aims to be offline-first and privacy-first by design, this is the part of the network we want to build and test first.

Users who give the central node permission to use their conversations to contribute to the global patterns will therefore have the most up to date popular context. Users who opt for a backup service will be able to save device space and use their personal cloud as their primary store, making it possible to wipe their phone in the event of a compromise. 

---

The aim of this network is to minimize the about of written language that is store, but incrementally computing the fingerprint of stored information and providing automatically it as soon as possible to devices which regularly access their personal lexicon graph. The lexicon graph is a graph of logical decisions which provides insights into the most likely context a person is speaking in. The aim of this is to simulate the results of a random-forest algorithm and simple k-means cluster analysis, without actually running them all the time (apart from the central database, which will already have labelled fingerprints to run more complex and intensive algorithms, with the goal of further anonymising user information while increasing it's reliability as a "middle man" that understands that to whisper into each device to make it's perspective synchronised with a peer device without directly knowing it's personal details (again, unless explicitly shared, in which case, the central node is removed from the stream. In these cases, standard encryption methods between devices apply. 

In the event that the mediator is not need, due to explicit indication of trust, the communication channel is encrypted in such a manner that the central node is also unaware.

We will be using a combination of Signal.io, Gundb.io, and Firebase to handle the different levels of context needed.

Firebase being the flattest and most anonymised layer. This will be until we have our own real-time servers, doing calculations and updating Firebase for user accounts. At this point Firebase will become a document backup for aggregated information, which our central nodes can update after processing data.

GunDB will be the real-time database that connects users through socket.io, allowing them to simulate real-time connections in their own contexts without having to talk to Firebase, unless both nodes want to access previously unacquired context fingerprints, or backup their own information for later use, from a different devices. This is extremely effective for group chat situations, without stressing our servers and increasing costs exponentially, unless a user has paid to have a real-time private backup.

Signal.io will handle communications between two users who don't want to be completely private and use stored information on their phone as their lexicon graph. Each user will still have independent access to their personal real-time database (firebase for now).

This is the Machine Insight Network Interpreter (MINI) architecture that will connect all the individual MINI models. Each MINI model will house fingerprints that represent the contexts it expects to be performant in.

---

To describe how we will calculate a local context with a global context, I have found  video which helps illustrate how Feynman's theories provide shortcuts. The mathematical/geometrical reflection as described in Feynman's lost lecture. Here is a simple video to explain reflective property of this network. It references reflective nature of circles with ellipses in them, which are in turn also describable in terms of circles:  https://www.youtube.com/watch?v=xdIjYBtnvZU

To actually create the fingerprints of conversation, statements will be represented in a meta-model which is composed on logical state changes to nouns and verbs. While sentences can be  Furthermore, contextual sentiment will be represented as equations of Fourier transforms, which are variations from the global average, which is always represented as a golden spiral. Here is a short video explaining the properties of the Fourier transform we want to leverage: https://www.youtube.com/watch?v=spUNpyF58BY

 Since neural networks extremely effective at processing images and the differences between them, it is a good medium for compressing data. As long as each image can be represented precisely as a mathematical algorithm, images will be our communication device. This is video describing the geometrical properties of irrational numbers, and why the golden ratio will be used as our baseline or zero-point, when comparing how much one context differs from another and representing it graphically, so that a ML system can quickly understand the calculation without actually performing it.
 https://www.youtube.com/watch?v=sj8Sg8qnjOg