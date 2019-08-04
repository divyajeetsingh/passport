import { Component, OnInit, OnDestroy } from '@angular/core';
import {
    ToastController,
    Platform,
    LoadingController, NavController
} from '@ionic/angular';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  Marker,
  GoogleMapsAnimation,
  MyLocation,
  GoogleMapsMapTypeId
} from '@ionic-native/google-maps';


@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.page.html',
  styleUrls: ['./map-view.page.scss'],
})
export class MapViewPage implements OnInit  ,  OnDestroy{
 
  map: GoogleMap;
  loading: any;
  locationbutton: boolean = false;
  mettingbutton: boolean = false;
  locationsLOCAL: (string | number)[][];
  captureLatLong: any;

  constructor(
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    private platform: Platform,private navCtrl: NavController) { }

  async ngOnInit() {
    // Since ngOnInit() is executed before `deviceready` event,
    // you have to wait the event.
    await this.platform.ready();
    await this.loadMap();
  }

  loadMap() {
    this.map = GoogleMaps.create('map_canvas', {
      mapType: GoogleMapsMapTypeId.ROADMAP,
      camera: {

        target: {
          lat: 43.0741704,
          lng: -89.3809802
        },
        zoom: 18,
        tilt: 30
      } ,  
      controls : {
        compass: true,
				myLocationButton: true,
				indoorPicker: true,
				zoom: true
      }
      , 
      gestures: {
				scroll: true,
				tilt: true,
				rotate: true,
				zoom: true
			}
    });

  }

  async onButtonClick() {
    this.map.clear();

    this.loading = await this.loadingCtrl.create({
      message: 'Please wait...'
    });
    await this.loading.present();

    // Get the location of you
    this.map.getMyLocation().then((location: MyLocation) => {
      this.loading.dismiss();
      console.log(JSON.stringify(location, null ,2));

      // Move the map camera to the location with animation
      this.map.animateCamera({
        
        // mapTypeId: google.maps.MapTypeId.ROADMAP,
        target: location.latLng,
        // mapTypeId  :  ''
        zoom: 17,
        tilt: 30,
      
      } , 
      );
      // this.map.setMapTypeId( { 'mapType': this.googleMaps.MapTypeId.ROADMAP})

      // add a marker
           this.locationsLOCAL = [
              [
                  "New Exaple Ruby game event",
                  28.619059931976278,
                  77.39065095239255,
                  1,
                  "Georgia Mason",
                  "",
                  "Norfolk Botanical Gardens, 6700 Azalea Garden Rd.",
                  "coming soon"
              ],
              [
                  "Fish Dish",
                  28.6207641,
                  77.36392920000003,
                  2,
                  "Terry Cox-Joseph",
                  "Rowena's",
                  "758 W. 22nd Street in front of Rowena's",
                  "found"
              ],
              [
                  "A Rising Community",
                  36.95298,
                  -76.25158,
                  3,
                  "Steven F. Morris",
                  "Judy Boone Realty",
                  "Norfolk City Library - Pretlow Branch, 9640 Granby St.",
                  "found"
              ],
              [
                  "A School Of Fish",
                  36.88909,
                  -76.26055,
                  4,
                  "Steven F. Morris",
                  "Sandfiddler Pawn Shop",
                  "5429 Tidewater Dr.",
                  "found"
              ],
              [
                  "Aubrica the Mermaid (nee: Aubry Alexis)",
                  36.8618,
                  -76.203,
                  5,
                  "Myke Irving/ Georgia Mason",
                  "USAVE Auto Rental",
                  "Virginia Auto Rental on Virginia Beach Blvd",
                  "found"
              ]
          ]
          let marker 
          for (let i = 0; i < this.locationsLOCAL.length; i++) {
            console.log(this.locationsLOCAL[i])

            // let  localLation :  any
            var  localLation   =  {  lat : this.locationsLOCAL[`${i}`][1]  , lng :  this.locationsLOCAL[`${i}`][2]}
            marker =    this.map.addMarkerSync({
              title: this.locationsLOCAL[`${i}`][0] ,
              snippet: 'This plugin is awesome!',
              position: localLation,
              animation: GoogleMapsAnimation.BOUNCE
            });
            marker.showInfoWindow();
            marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe((data)=>{
              console.log("clickc  marker " ,  data)
              this.captureLatLong  =  data 
            });
            // marker.event.addListener('click' , function (){
            //   console.log("dddd ")
            // })

          }
      // let marker: Marker = this.map.addMarkerSync({
      //   title: '@ionic-native/google-maps plugin!',
      //   snippet: 'This plugin is awesome!',
      //   position: location.latLng,
      //   animation: GoogleMapsAnimation.BOUNCE
      // });

      // show the infoWindow
      // marker.showInfoWindow();

      // If clicked it, display the alert
      // marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
      //   this.showToast('clicked!');
      // });
      // marker.addListener()
      // marker.on(GoogleMapsEvent.INFO_CLICK).subscribe(()=>{
      //   console.log("clickc  marker ")
      // });
      // this.map.addEventListener('click'   ).subscribe( (data)=>{
      //   console.log(data)
      // })
  

        })
    .catch(err => {
      this.loading.dismiss();
      this.showToast(err.error_message);
    });
  }

  checkbox_data(value) {
    if (value == 'location') {
      this.locationbutton = false;
    }

    if(value == 'location_outline') {
      this.locationbutton = true;
      this.mettingbutton = false;
    }

    if(value == 'meeting_point_filled') {
      this.mettingbutton = false;
    }

    if (value == 'meeting_point') { 
      this.mettingbutton = true;
      this.locationbutton = false;
    }
  }

  async showToast(message: string) {
    let toast = await this.toastCtrl.create({
      message: message,
      duration: 2000,
      position: 'middle'
    });

    toast.present();
  }

    navigateToCompany(){
      this.navCtrl.navigateBack(['/company-profile']);
    }


    ngOnDestroy(){
      console.log(this.captureLatLong , "capture Lat Long")
    }
}
