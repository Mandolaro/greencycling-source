

<div class="circular_image">
    <img
    
    src="/img/greencycling.png"
    alt="Greencycling logo"
    width="512"
    height="512"
/>
<div class = "mt-4 near"><a href="/seller/bin-locations/bin-near/" class="btn">Nearest Bin</a></div>
 </div>
  <div class = "mt-4 position absolute">
  <a href="/seller/bin-locations/bin-all/" class="btn">All Available Bin</a>
</div >
<div class = "mt-4 recent"><a href="/seller/bin-locations/bin-recent/" class="btn">Recent Bin</a></div>
  
<style lang="postcss">
   div.absolute {
  position: absolute;
  top: 500px;
  right: 0;
  width: 200px;
  height: 100px;
  left: 800px;
}
  div.near
  {
    position: absolute;
    top: 75px;
    right: 0px;
    width: 200px;
    height: 100px;
    left: 500px;
  }
  div.recent
  {
    position: absolute;
    top: 75px;
    right: 0px;
    width: 200px;
    height: 100px;
    left: 1200px;
  }
    .circular_image {
  width: 512px;
  height: 512px;
  border-radius: 50%;
  overflow: hidden;
  float: left;
  margin-left: 225px;
  margin-top: 50px;
  
  
  /*for demo*/
  vertical-align:middle;
}

.circular_image img{
  width:100%;
}
    
    .btn {
        @apply w-fit text-lg text-center text-white font-bold py-2 px-4 rounded-lg bg-green-600 hover:bg-green-800;
    }
</style>
