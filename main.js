let previous = document.querySelector('#pre');
let play = document.querySelector('#play');
let next = document.querySelector('#next');
let title = document.querySelector('#title');

let recent_volume= document.querySelector('#volume');
let volume_show = document.querySelector('#volume_show');
let slider = document.querySelector('#duration_slider');

let show_duration = document.querySelector('#show_duration');
let track_image = document.querySelector('#track_image');
let auto_play = document.querySelector('#auto');
let present = document.querySelector('#present');
let total = document.querySelector('#total');
let artist = document.querySelector('#artist');

let timer;
let autoplay = 0;

let index_no = 0;
let playing_song = false;

let track = document.createElement('audio');

let All_song = [
  {
    name: "1ier song",
    path: "musik/song1.mp3",
    img: "image/img6.jpg",
    singer: "1ier singer"
  },
  {
    name: "2ieme song",
    path: "musik/song2.mp3",
    img: "image/img5.jpg",
    singer: "2ieme singer"
  },
  {
    name: "3ieme song",
    path: "musik/song3.mp3",
    img: "image/img4.jpg",
    singer: "3ieme singer"
  },
  {
    name: "4ieme song",
    path: "musik/song4.mp3",
    img: "image/img3.jpg",
    singer: "4ieme singer"
  },
  {
    name: "5ieme song",
    path: "musik/5.mp3",
    img: "image/img2.jpg",
    singer: "5ieme singer"
  },
  {
    name: "6ieme song",
    path: "musik/song6.mp3",
    img: "image/img1.jpg",
    singer: "6ieme singer"
  },
  {
    name: "7ieme song",
    path: "musik/song7.mp3",
    img: "image/img2(8).jpg",
    singer: "7ieme singer"
  },
  {
    name: "8ieme song",
    path: "musik/song2(9).mp3",
    img: "image/img2(9).jpg",
    singer: "8ieme singer"
  },
  {
    name: "9ieme song",
    path: "musik/song2(10).mp3",
    img: "image/img2(10).jpg",
    singer: "9ieme singer"
  },
  {
    name: "10ieme song",
    path: "musik/song2(11).mp3",
    img: "image/img2(11).jpg",
    singer: "10ieme singer"
  },
  {
    name: "11ieme song",
    path: "musik/song2(12).mp3",
    img: "image/img2(12).jpg",
    singer: "11ieme singer"
  },
  {
    name: "12ieme song",
    path: "musik/song2(13).mp3",
    img: "image/img2(13).jpg",
    singer: "12ieme singer"
  },
  {
    name: "13ieme song",
    path: "musik/song2 (14).mp3",
    img: "image/img2 (14).jpg",
    singer: "13ieme singer"
  },
  {
    name: "14ieme song",
    path: "musik/song2 (15).mp3",
    img: "image/img2 (15).jpg",
    singer: "14ieme singer"
  },
  {
    name: "15ieme song",
    path: "musik/song2(16).mp3",
    img: "image/img2(16).jpg",
    singer: "15ieme singer"
  },
  {
    name: "17ieme song",
    path: "musik/song2(18).mp3",
    img: "image/img2(18).jpg",
    singer: "17ieme singer"
  },
];

function load_track(index_no){
	clearInterval(timer);
	reset_slider()
    track.src = All_song[index_no].path;
    title.innerHTML = All_song[index_no].name;
    track_image.src = All_song[index_no].img;
    artist.innerHTML = All_song[index_no].singer;
    track.load();

    total.innerHTML = All_song.length;
    present.innerHTML = index_no + 1;
    timer = setInterval(range_slider , 1000);
}
load_track(index_no); 

function mute_sound(){
	track.volume = 0;
	volume.value = 0;
	volume_show.innerHTML = 0;
}

function reset_slider(){
	slider.value = 0;
}

function justplay(){
	if (playing_song==false) {
		playsong();
	}else{
		pausesong();
	}
}

function playsong(){
	track.play();
	playing_song = true;
	play.innerHTML = '<i class="fa fa-pause"></i>';
}

function pausesong(){
	track.pause();
	playing_song = false;
	play.innerHTML = '<i class="fa fa-play"></i>';
}
 
function next_song(){
	if (index_no < All_song.length - 1) {
		index_no += 1;
		load_track(index_no);
		playsong(); 
	}else{
		index_no = 0;
		load_track(index_no);
		playsong(); 
	}
} 
 
function previous_song(){
	if (index_no > 0) {
		index_no -= 1;
		load_track(index_no);
		playsong();
	}else{
		index_no = All_song.length;
		load_track(index_no);
		playsong();
	}
}

function volume_change(){
	volume_show.innerHTML = recent_volume.value;
	track.volume = recent_volume.value / 100;
} 

function change_duration(){
	slider_position = track.duration * (slider.value / 100);
	track.currentTime = slider_position;
}


function autoplay_switch(){
	if (autoplay==1) {
        autoplay=0;
        auto_play.style.background = "rgba(255,255,255,0.2)";
	}else{
		autoplay = 1;
		auto_play.style.background = "#FF8A65"; 
	}
}

function range_slider(){
	let position = 0;

	if (!isNaN(track.duration)) {
		position = track.currentTime * (100 / track.duration);
		slider.value = position;

		if (track.ended) {
			play.innerHTML = '<i class="fa fa-play"></i>';
			if (autoplay==1) {
				index_no += 1;
				load_track(index_no);
				playsong();
			}
		}
	}
}
  