import React from 'react';

function Business(props) {
  return (
    /* <div>
        <h1 className="font-bold text-4xl text-center mb-6">{props.name}</h1>
        <img src={props.imageSrc} alt={props.name} className= "object-fill h-48 w-48 rounded-lg relative transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0"/>
        <p>{props.address}</p>
        <p>{props.city}</p>
        <p>{props.state}</p>
        <p>{props.category}</p>
        <p>{props.rating}</p>
    </div>
    */
    <div class="flex min-h-screen items-center justify-center bg-slate-100">
    <div class="group h-96 w-80 [perspective:1000px]">
      <div class="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        <div class="absolute inset-0">
          <img class="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40" src={props.imageSrc} alt={props.name} />
        </div>
        <div class="absolute inset-0 h-full w-full rounded-xl bg-black/60 px-12 text-center text-white [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <div class="flex min-h-full flex-col items-center justify-center">
            <h1 class="text-3xl font-bold">{props.name}</h1>
            <p class="text-lg">{props.address}</p>
            <p class="text-base">{props.state}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default Business;
