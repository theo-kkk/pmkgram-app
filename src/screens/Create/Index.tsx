import React, {useEffect} from 'react';
import {Button} from 'react-native';
import {useCameraRoll} from '@react-native-camera-roll/camera-roll';

function CreateScreen() {
  const [photos, getPhotos, save] = useCameraRoll();


  return (
    <>
      <Button title="Get Photos" onPress={() => getPhotos()} />
    </>
  );
}

export default CreateScreen;
