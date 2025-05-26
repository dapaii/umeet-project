"use client";

import { DeviceSettings, useCall, VideoPreview } from '@stream-io/video-react-sdk'
import React, { useEffect, useState } from 'react'
import { Button } from './ui/button';

const MeetingSetup = ({setIsSetupComplete}: {setIsSetupComplete: (value: boolean) => void}) => {

  const [hasCamera, setHasCamera] = useState(false);
// untuk mengecek apakah ada kamera yang terpasang
  // ini akan mengecek perangkat media yang tersedia, seperti kamera dan mikrofon
  useEffect(() => {
    navigator.mediaDevices.enumerateDevices().then(devices => {
      const hasVideo = devices.some(device => device.kind === 'videoinput');
      setHasCamera(hasVideo);
    });
  }, []);


  const [isMicCamToggledOn, setIsMicCamToggledOn] = useState(false)
  const call = useCall()
  
  if(!call){
    throw new Error('usually must be used within a StreamCall component')
  }

  useEffect(() => {
    if(isMicCamToggledOn){
      call?.camera.disable()
      call?.microphone.disable()
    }else{
      call?.camera.enable()
      call?.microphone.enable()
    }
  }, [isMicCamToggledOn, call?.camera, call?.microphone])
  

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-3 text-white">
      <h1 className="text-2xl font-bold">Setup</h1>
      {hasCamera ? <VideoPreview /> : <p className="text-red-500">No camera detected</p>}
      <div className="flex h-16 items-center justify-center gap-3">
        <label className="flex items-center justify-center gap-2 font-medium">
          <input 
          type="checkbox"
          checked={isMicCamToggledOn}
          onChange={(e) => setIsMicCamToggledOn(e.target.checked)}
          />
          Join with mic and camera off
        </label>
        <DeviceSettings />
      </div>
      <Button className="rounded md bg-green-500 px-4 py-2 5" onClick={() => {
        call.join();

        setIsSetupComplete(true);
      }}>
        Join Meeting
      </Button>
    </div>
  )
}

export default MeetingSetup