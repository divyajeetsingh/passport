import { Injectable, ɵConsole } from '@angular/core';
import { UtilityProvider } from "../utility/utility";
import { LoginSecurityProvider, LOGIN_KEY } from "../login-security/login-security";
import { App } from "ionic-angular";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Transfer, TransferObject } from '@ionic-native/transfer';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { Camera } from '@ionic-native/camera';
// import { OneSignal, OSDisplayType } from '@ionic-native/onesignal';

/**
 Generated class for the ApiProvider provider.

 See https:angular.ioguidedependency-injection for more info on providers
 and Angular DI.
 **/


// const API_URL = 'http://c6d02815.ngrok.io/'
const API_URL = 'https://ileague.teamjft.com/'


const LAT_LONG = API_URL + 'findNearMeEvent'
const SOCIAL_SIGN_UP_GOOGLE = API_URL + 'googleLogin'
const SOCIAL_SIGN_UP_FACEBOOK = API_URL + 'facebookLogin'
const SOCIAL_SIGN_UP_TWIITER = API_URL + 'twitterLogin'
const SIGN_UP = API_URL + 'signup';
const LOGIN = API_URL + 'login';
const FORGET_PASSWORD = API_URL + 'forgotPassword';
const CREATE_PROFILE = API_URL + 'createProfile';
const GET_PROFILE = API_URL + 'getProfile';
const PROFILE_DATA = API_URL + 'player_profile_Teams'
const GET_PLAYER_TEAMS = API_URL + 'getPlayerTeams'
const PLAYER_STATS_BY_TEAM_DATA = API_URL + 'playerStatByTeam'
const UPADATE_PROFILE = API_URL + 'updateProfile';
const ADD_SPORT = API_URL + 'addSport';
const DELETE_SPORT = API_URL + 'delSport';
const GET_SPORTS = API_URL + 'getSports';
const CREATE_TEAM = API_URL + 'createTeam';
const GET_ALL_TEAMS = API_URL + 'getAllTeams';
// const FIND_TEAMS = API_URL + 'findTeams';
const FIND_TEAM = API_URL + 'findTeam';
const UPDATE_TEAM = API_URL + 'updateTeam';
const DELETE_TEAM = API_URL + 'delTeam';
const GET_OWN_TEAM = API_URL + 'getOwnTeam';
const JOIN_TEAM_REQUEST_PLAYER = API_URL + 'joinTeamRequestPlayer';
const JOIN_TEAM_REQUEST_MANAGER = API_URL + 'joinTeamRequestManager';
const UPDATE_TEAM_REQUEST = API_URL + 'updateTeamRequest';
const VIEW_PLAYER_SENT_REQUEST = API_URL + 'viewPlayerSentRequest';
const VIEW_PLAYER_RECEIEVE_REQUEST = API_URL + 'viewPlayerReceivedRequest';
const VIEW_PLAYER_REQUEST = API_URL + 'viewPlayerRequest';
const VIEW_MANAGER_REQUEST = API_URL + 'viewManagerRequest';
const VIEW_MANAGER_SENT_REQUEST = API_URL + 'viewManagerSentRequest';
const VIEW_MANAGER_RECEIEVE_REQUEST = API_URL + 'viewManagerReceivedRequest';
const CREATE_EVENT = API_URL + 'createEvent';
const UPDATE_EVENT = API_URL + 'updateEvent';
const DELETE_EVENT = API_URL + 'delEvent';
const GET_ALL_EVENT = API_URL + 'getAllEvent';
const GET_HOME_PAGE_DATA = API_URL + 'getHomePageData'
const EVENT_PARTICIPATE = API_URL + 'eventParticipate';
const ADD_MATCH_DETAILS = API_URL + 'addMatchDetails';
const GET_MATCH_DETAILS = API_URL + 'getMatchesDetails';
const UPDATE_MATCH_DETAILS = API_URL + 'updateMatchDetails';
const CREATE_MATCH_PARTICIPATE = API_URL + 'createMatchParticipant';
const UPDATE_MATCH_PARTICIPATE = API_URL + 'updateMatchParticipant';
const CREATE_CRICKET_PROFILE = API_URL + 'createCricketProfile';
const UPDATE_CRICKET_PROFILE = API_URL + 'updateCricketProfile';
const CREATE_FOOTBALL_PROFILE = API_URL + 'createFootballProfile';
const UPDATE_FOOTBALL_PROFILE = API_URL + 'updateFootballProfile';
const CREATE_BASKETBALL_PROFILE = API_URL + 'createBasketballProfile';
const CREATE_TENNIS_PROFILE = API_URL + 'createTennisProfile'
const UPDATE_BASKETBALL_PROFILE = API_URL + 'updateBasketballProfile';
const CREATE_BASEBALL_PROFILE = API_URL + 'createBaseballProfile';
const UPDATE_BASEBALL_PROFILE = API_URL + 'updateBaseballProfile';
const CREATE_HOCKEY_PROFILE = API_URL + 'createHockeyProfile';
const UPDATE_HOCKEY_PROFILE = API_URL + 'updateHockeyProfile';
const CREATE_RUGBY_PROFILE = API_URL + 'createRugbyProfile';
const UPDATE_RUGBY_PROFILE = API_URL + 'updateRugbyProfile';
const CREATE_GOLF_PROFILE = API_URL + 'createGolfProfile';
const UPDATE_GOLF_PROFILE = API_URL + 'updateGolfProfile';
const CREATE_RUNNING_PROFILE = API_URL + 'createRunningProfile';
const UPDATE_RUNNING_PROFILE = API_URL + 'updateRunningProfile';
const CREATE_SOCCER_PROFILE = API_URL + 'createSoccerProfile';
const UPDATE_SOCCER_PROFILE = API_URL + 'updateSoccerProfile';
const CREATE_SWIMMING_PROFILE = API_URL + 'createSwimmingProfile';
const UPDATE_SWIMMING_PROFILE = API_URL + 'updateSwimmingProfile';
const CREATE_SEASON = API_URL + 'createSeason';
const UPDATE_SEASON = API_URL + 'updateSeason';
const DELETE_SEASON = API_URL + 'delSeason';
const GET_SEASONS = API_URL + 'getSeasons';
const GET_SEASON = API_URL + 'getSeason';
const ADD_FOOTBALL_MATCH_STATUS = API_URL + 'addFootballMatchStat';
const UPDATE_FOOTBALL_MATCH_STATUS = API_URL + 'updateFootballMatchStat';
const GET_FOOTBALL_MATCH_STATUS = API_URL + 'getFootballMatchStat';
const GET_FOOTBALL_MATCH_STATUSS = API_URL + 'getFootballMatchStats';
const DELETE_FOOTBALL_MATCH_STATUS = API_URL + 'delFootballMatchStat';
const ADD_FOOTBALL_PLAYER_STATUS = API_URL + 'addFootballPlayerStat';
const UPDATE_FOOTBALL_PLAYER_STATUS = API_URL + 'updateFootballPlayerStat';
const GET_ALL_PLAYER = API_URL + 'getAllPlayer';
const UPLOAD_PROFILE_IMAGE = API_URL + 'uploadProfileImage';
const UPLOAD_PROFILE_NEW_IMAGE = API_URL + 'uploadImage'
const UPLAD_HIGHLIGHT_NEW = API_URL + 'uploadHightLight'
const PROFILE_TEAMS_TEAMMATES = API_URL + 'player_Teams_Teamsmates';
const GET_PLAYER_SCHEDULE = API_URL + 'getPlayerSchedule';
const PLAYER_STATS_BY_TEAM = API_URL + 'playerStatByTeam';
const EVENT_PARTICIPANT = API_URL + 'eventParticipant';
const RESEND_VERIFICATION_EMAIL = API_URL + 'resendVerificationEmail';
const FIND_TEAMS_AND_EVENTS = API_URL + 'findTeamsAndEvents';

const ADD_PAYMENT_METHOD = API_URL + 'addPaymentMethod';
const CREATE_ROLE = API_URL + 'createRole';
const ADD_LOCATION = API_URL + 'addLocation';
const ADD_INTRESTED_SPORT = API_URL + 'addInterestedSport';
const CHANGE_PASSWORD = API_URL + 'changePassword'
const ADD_MATCH_DETAIL = API_URL + 'addMatchDetails'
const CREATE_TEAMS = API_URL + 'createTeam'

// const GET_PAYMENT_CARD_LIST = API_URL + 'getPaymentCardList'
const GET_PAYMENT_CARD_LIST = API_URL + 'getPaymentCardList';

const ADD_SPONSOR = API_URL + 'addSponsor'

const GET_ALL_PLAYER_NEW = API_URL + 'getAllPlayer';

const CREATE_REQUEST = API_URL + 'joinTeamRequestManager'

const INVITE_OTHER_BY_EMAIL = API_URL + 'InviteOtherByEmail'
const VIEW_INVITE = API_URL + 'viewInvite'


const UPDATED_TEAM_REQUEST = API_URL + 'updateTeamRequest'

const EVENT_PARTICIPANT_NEW = API_URL + 'eventParticipant'
const CREATE_CHARGES = API_URL + 'createCharge'

const TEAM_FOR_OPONENT = API_URL + 'teamForOpponent'


const APPROVE_REGISTRATION_DATA = API_URL + 'getApproveRegistrationData'

const REGISTER_EVENT_ID = API_URL + 'approveRegistration'
const INVITE_EVENT = API_URL + 'eventInvite'
const GET_USER_HIGHLIGHT = API_URL + 'getUserHightLight'
const GET_NOTIFICATION = API_URL + 'getNotification'
const UPDATE_NOTIFICATION = API_URL + 'updateNotification'
const UPDATE_GAME_REQUEST = API_URL + 'updateGameRequest'

const GET_PLAYER_SET_LINEUP = API_URL + 'getPlayerForSetLineUp'
const NOTIFY_TEAM = API_URL + 'notifyTeam'

const GET_TEAMMATES_EVENT  =  API_URL + 'getTeammatesAndEvents'
const CLEAR_ALL_NOTIFY  =  API_URL + 'clearAllNotify'
declare var cordova: any;

const CREATE_SET_LINE_UP = API_URL + 'createSetLineup'
const GET_PLAYER_STAT_VIEW =  API_URL + 'getPlayerStatView';
const GET_MATCH_LIST_STAT_CAPTURE = API_URL + 'getMatchListForStatCapture'
const GET_EVENT_BY_ID_REGISTRATION_CONFIRMATION_PAGE = API_URL +'getEventForRegistrationComplete'
const CREATE_PLAYER_STAT =  API_URL +  'createPlayerStat'
const GET_PLAYER_STAT   = API_URL +  'getPlayerStat'
const VALIDATE_PLAYER_STAT =  API_URL+  'validatePlayerStat'
const UPDATE_TEAM_EDIT =  API_URL + 'updateTeam'
const GET_MATCH_STAT =  API_URL +  'getMatchStat'
const GET_TEAM_LIST_FOR_STAT_SEARCH   =  API_URL +  'getTeamListForStatSearch'
const STAT_SEARCH  =  API_URL +  'statSearch'
const MANAGE_ROSTER =  API_URL + 'manageRosterSize'

@Injectable()
export class ApiProvider {
  token_user;

  constructor(public http: HttpClient,
    public utilityProvider: UtilityProvider,
    public loginSecurity: LoginSecurityProvider,
    public appCtrl: App,
    private Filetransfer: FileTransfer,
    private transfer: Transfer,
    ) {
    console.log('Hello ApiProvider Provider');

  }


  updateLatLong(requestData) {


    console.log("update Longitude latitude data")
    return new Promise((resolve, reject) => {

      this.loginSecurity.getHeaders().then((header: any) => {


        this.http.post(LAT_LONG, requestData, { headers: header }).subscribe((data) => {
          resolve(data);
          console.log('Update latitude longitude api   api provider', data);


        }, (error2) => {
          reject(error2);
          console.log('error api', error2);

        });
      }).catch((error) => {
        console.log('error in headers', error);
      });
    });


  }

  socialSignUpTwitter(requestData) {
    console.log('social sign up rquest by Twitter')
    return new Promise((resolve, reject) => {
      this.http.post(SOCIAL_SIGN_UP_TWIITER, requestData).subscribe((data) => {
        resolve(data);
        console.log('Social  sign up  api provider', data);


      }, (error2) => {
        reject(error2);
        console.log('error api', error2);

      })
    })


  }

  socialSignUpGoogle(requestData) {
    console.log('social sign up rquest by google')
    return new Promise((resolve, reject) => {
      this.http.post(SOCIAL_SIGN_UP_GOOGLE, requestData).subscribe((data) => {
        resolve(data);
        console.log('Social  sign up  api provider', data);


      }, (error2) => {
        reject(error2);
        console.log('error api', error2);

      })
    })

  }

  socialSignUpFacebook(requestData) {
    console.log('social sign up rquest By facebook ')
    return new Promise((resolve, reject) => {
      this.http.post(SOCIAL_SIGN_UP_FACEBOOK, requestData).subscribe((data) => {
        resolve(data);
        console.log('Social  sign up  api provider', data);


      }, (error2) => {
        reject(error2);
        console.log('error api', error2);

      })
    })

  }

  login(requestData) {
    console.log('rrrrrrrrrrrrrrrrrrrrrrrr')
    return new Promise((resolve, reject) => {
      this.http.post(LOGIN, requestData).subscribe((data) => {
        resolve(data);
        console.log('login data inside apiProvider', data);
      }, (error2) => {
        reject(error2);
        console.log('error api', error2);
      });
    });
  }

  signUp(requestData) {
    return new Promise((resolve, reject) => {
      this.http.post(SIGN_UP, requestData).subscribe((data) => {
        resolve(data);
        console.log('signUp data inside apiProvider', data);
      }, error2 => {
        reject(error2);
        console.log('login error inside apiProvider', error2);
      });
    });
  }

  forgotPassword(requestData) {
    return new Promise((resolve, reject) => {
      this.http.post(FORGET_PASSWORD, requestData).toPromise().then((data) => {
        resolve(data);
        console.log('forgotPassword data inside apiProvider', data);
      }).catch((error) => {
        reject(error);    this.utilityProvider.presentToast(error);
        console.log('signUp data inside apiProvider', error);
      });
    });
  }

  createProfile(requestData) {
    return new Promise((resolve, reject) => {
      this.loginSecurity.getHeaders().then((headers: any) => {
        // let header=headers.append('enctype','multipart/form-data');
        // console.log('headers',header);
        this.http.post(CREATE_PROFILE, requestData, { headers: headers }).toPromise().then((data) => {
          resolve(data);
          console.log('profile api data', data);
        }).catch((error) => {
          reject(error);    this.utilityProvider.presentToast(error);
          console.log('error profile api', error);
        });
      }).catch((error) => {
        console.log('createProfile headers error inside apiProvider ', error);
      });
    });
  }

  getProfileDetail() {
    return new Promise((resolve, reject) => {
      this.loginSecurity.getHeaders().then((headers: any) => {
        // let header=headers.append('enctype','multipart/form-data');
        // console.log('== p headers==',headers);
        this.http.post(GET_PROFILE, null, { headers: headers }).subscribe((data) => {
          resolve(data);
          console.log('getProfileDetail api data', data);
        }, error2 => {
          reject(error2);
          console.log('getProfileDetail api data', error2);
        });
      }).catch((error) => {
        console.log();
        this.utilityProvider.presentToast('Your session expired.');
        // //this.appCtrl  .getRootNav().setRoot(SignInPage);
      });
    });
  }
  profiledata() {
    return new Promise((resolve, reject) => {
      this.loginSecurity.getHeadersWithoutCache().then((headers: any) => {
        // let header=headers.append('enctype','multipart/form-data');
        // console.log('== p headers==',headers);
        this.http.get(PROFILE_DATA, { headers: headers }).subscribe((data) => {
          resolve(data);
          console.log('getProfileDetail api data', data);
        }, error2 => {
          reject(error2);
          console.log('getProfileDetail api data', error2);
        });
      }).catch((error) => {
        console.log();
        this.utilityProvider.presentToast('Your session expired.');
        // //this.appCtrl  .getRootNav().setRoot(SignInPage);
      });
    });
  }
  getPlayerTeam(requestData) {
    return new Promise((resolve, reject) => {
      this.loginSecurity.getHeaders().then((headers: any) => {
        // let header=headers.append('enctype','multipart/form-data');
        // console.log('== p headers==',headers);
        this.http.post(GET_PLAYER_TEAMS, requestData, { headers: headers }).subscribe((data) => {
          resolve(data);
          console.log('get  players teams data', data);
        }, error2 => {
          reject(error2);
          console.log('get  players teams errors', error2);
        });
      }).catch((error) => {
        console.log();
        this.utilityProvider.presentToast('Your session expired.');
        // //this.appCtrl  .getRootNav().setRoot(SignInPage);
      });
    });


  }
  playerStatByTeam() {
    return new Promise((resolve, reject) => {
      this.loginSecurity.getHeadersWithoutCache().then((headers: any) => {
        // let header=headers.append('enctype','multipart/form-data');
        // console.log('== p headers==',headers);
        this.http.get(PLAYER_STATS_BY_TEAM_DATA, { headers: headers }).subscribe((data) => {
          resolve(data);
          console.log('playerStatByTeam', data);
        }, error2 => {
          reject(error2);
          console.log('playerStatByTeam errors', error2);
        });
      }).catch((error) => {
        console.log();
        this.utilityProvider.presentToast('Your session expired.');
        // //this.appCtrl  .getRootNav().setRoot(SignInPage);
      });
    });


  }



  updateProfile(requestData) {
    return new Promise((resolve, reject) => {
      this.loginSecurity.getHeaders().then((headers: any) => {
        // let header = headers.append('enctype','multipart/form-data');
        console.log('headers', headers);
        this.http.post(UPADATE_PROFILE, requestData, { headers: headers }).subscribe((data) => {
          resolve(data);
          console.log('profile updated inside apiProvider', data);
        }, error => {
          reject(error);    this.utilityProvider.presentToast(error);
          console.log('error inside update profile', error);
        });
      }).catch((error) => {
        this.utilityProvider.presentToast('Your session expired.');
        //this.appCtrl .getRootNav().setRoot(SignInPage);
      });
    });
  }

  addSport(requestData) {
    return new Promise((resolve, reject) => {
      this.loginSecurity.getHeaders().then((headers: any) => {
        this.http.post(ADD_SPORT, requestData, { headers: headers }).subscribe((data) => {
          resolve(data);
          console.log('addSport data inside apiProvider', data);
        }, error2 => {
          reject(error2);
          console.log('addSport data inside apiProvider', error2);
        });
      }).catch((error) => {
        this.utilityProvider.presentToast('Your session expired.');
        //this.appCtrl .getRootNav().setRoot(SignInPage);
      });
    });
  }

  deleteSport(requestData) {
    return new Promise((resolve, reject) => {
      this.loginSecurity.getHeaders().then((headers: any) => {
        this.http.post(DELETE_SPORT, requestData, { headers: headers }).subscribe((data) => {
          resolve(data);
          console.log('deleteSport data inside apiProvider', data);
        }, error2 => {
          reject(error2);
          console.log('deleteSport data inside apiProvider', error2);
        });
      }).catch((error) => {
        this.utilityProvider.presentToast('Your session expired.');
        //this.appCtrl .getRootNav().setRoot(SignInPage);
      });
    });
  }

  getSports() {
    return new Promise((resolve, reject) => {
      this.loginSecurity.getHeaders().then((headers: any) => {
        console.log("==header1===", headers)
        this.http.get(GET_SPORTS, { headers: headers }).subscribe((data) => {
          console.log("==header=2==", headers)
          resolve(data);
          console.log('getSports data inside apiProvider', data);
        }, error2 => {
          reject(error2);
          console.log('getSports error inside apiProvider', error2);
        });
      }).catch((error) => {
        this.utilityProvider.presentToast('Your session expired.');
        //this.appCtrl .getRootNav().setRoot(SignInPage);
      });
    });
  }

  createTeam(requestData) {
    return new Promise((resolve, reject) => {
      this.loginSecurity.getHeaders().then((headers: any) => {
        this.http.post(CREATE_TEAM, requestData, { headers: headers }).subscribe((data) => {
          resolve(data);
          console.log('createTeam data inside apiProvider', data);
        }, error2 => {
          reject(error2);
          console.log('createTeam error inside apiProvider', error2);
        });
      }).catch((error) => {
        this.utilityProvider.presentToast('Your session expired.');
        //this.appCtrl .getRootNav().setRoot(SignInPage);
      });
    });
  }

  getAllTeams() {
    return new Promise((resolve, reject) => {
      this.loginSecurity.getHeadersWithoutCache().then((headers: any) => {
        this.http.get(GET_ALL_TEAMS, { headers: headers }).subscribe((data) => {
          console.log("==GET_ALL_TEAMS api P==", data)
          resolve(data);
          console.log('getAllTeams data inside apiProvider', data);
        }, error2 => {
          reject(error2);
          console.log('getAllTeams error inside apiProvider', error2);
        });
      }).catch((error) => {
        this.utilityProvider.presentToast('Your session expired.');
        //this.appCtrl .getRootNav().setRoot(SignInPage);
      });
    });
  }

  searchTeam(requestData) {
    return new Promise((resolve, reject) => {
      this.loginSecurity.getHeaders().then((headers: any) => {
        this.http.post(FIND_TEAM, requestData, { headers: headers }).subscribe((data) => {
          resolve(data);
          console.log('searchTeam data inside apiProvider', data);
        }, error2 => {
          reject(error2);
          console.log('searchTeam error inside apiProvider', error2);
        });
      }).catch((error) => {
        this.utilityProvider.presentToast('Your session expired.');
        //this.appCtrl .getRootNav().setRoot(SignInPage);
      });
    });
  }

  getOwnTeam() {
    return new Promise((resolve, reject) => {
      this.loginSecurity.getHeadersWithoutCache().then((headers: any) => {
        this.http.get(GET_OWN_TEAM, { headers: headers }).subscribe((data) => {
          resolve(data);
          console.log('getOwnTeam data inside apiProvider', data);
        }, error2 => {
          reject(error2);
          console.log('getOwnTeam error inside apiProvider', error2);
        });
      }).catch((error) => {
        this.utilityProvider.presentToast('Your session expired.');
        //this.appCtrl .getRootNav().setRoot(SignInPage);
      });
    });
  }

  updateTeam(requestData) {
    return new Promise((resolve, reject) => {
      this.loginSecurity.getHeaders().then((headers: any) => {
        this.http.post(UPDATE_TEAM, requestData, { headers: headers }).subscribe((data) => {
          resolve(data);
          console.log('updateTeam data inside apiProvider', data);
        }, error2 => {
          reject(error2);
          console.log('deleteTeam error inside apiProvider', error2);
        });
      }).catch((error) => {
        this.utilityProvider.presentToast('Your session expired.');
        //this.appCtrl .getRootNav().setRoot(SignInPage);
      });
    });
  }

  deleteTeam(requestData) {
    return new Promise((resolve, reject) => {
      this.loginSecurity.getHeaders().then((headers: any) => {
        this.http.post(DELETE_TEAM, requestData, { headers: headers }).subscribe((data) => {
          resolve(data);
          console.log('deleteTeam data inside apiProvider', data);
        }, error2 => {
          reject(error2);
          console.log('deleteTeam error inside apiProvider', error2);
        });
      }).catch((error) => {
        this.utilityProvider.presentToast('Your session expired.');
        // this.appCtrl .getRootNav().setRoot(SignInPage);
      });
    });
  }

  joinTeamRequestPlayer(requestData) {
    return new Promise((resolve, reject) => {
      this.loginSecurity.getHeaders().then((headers: any) => {
        this.http.post(JOIN_TEAM_REQUEST_PLAYER, requestData, { headers: headers }).subscribe((data) => {
          resolve(data);
          console.log('joinTeamRequestPlayer data inside apiProvider', data);
        }, error2 => {
          reject(error2);
          console.log('joinTeamRequestPlayer error inside apiProvider', error2);
        });
      }).catch((error) => {
        this.utilityProvider.presentToast('Your session expired.');
        //this.appCtrl .getRootNav().setRoot(SignInPage);
      });
    });
  }

  joinTeamRequestManager(requestData) {
    return new Promise((resolve, reject) => {
      this.loginSecurity.getHeaders().then((headers: any) => {
        this.http.post(JOIN_TEAM_REQUEST_MANAGER, requestData, { headers: headers }).subscribe((data) => {
          resolve(data);
          console.log('joinTeamRequestManager data inside apiProvider', data);
        }, error2 => {
          reject(error2);
          console.log('joinTeamRequestManager error inside apiProvider', error2);
        });
      }).catch((error) => {
        this.utilityProvider.presentToast('Your session expired.');
        //this.appCtrl .getRootNav().setRoot(SignInPage);
      });
    });
  }

  viewPlayerSentRequest() {
    return new Promise((resolve, reject) => {
      this.loginSecurity.getHeaders().then((headers: any) => {
        this.http.get(VIEW_PLAYER_SENT_REQUEST, { headers: headers }).subscribe((data) => {
          resolve(data);
          console.log('viewPlayerSentRequest data inside apiProvider', data);
        }, error2 => {
          reject(error2);
          console.log('viewPlayerSentRequest error inside apiProvider', error2);
        });
      }).catch((error) => {
        this.utilityProvider.presentToast('Your session expired.');
        //this.appCtrl .getRootNav().setRoot(SignInPage);
      });
    });
  }

  viewPlayerReceivedRequest() {
    return new Promise((resolve, reject) => {
      this.loginSecurity.getHeaders().then((headers: any) => {
        this.http.get(VIEW_PLAYER_REQUEST, { headers: headers }).subscribe((data) => {
          resolve(data);
          console.log('viewPlayerReceivedRequest data inside apiProvider', data);
        }, error2 => {
          reject(error2);
          console.log('viewPlayerReceivedRequest error inside apiProvider', error2);
        });
      }).catch((error) => {
        this.utilityProvider.presentToast('Your session expired.');
        //this.appCtrl .getRootNav().setRoot(SignInPage);
      });
    });
  }

  viewManagerSentRequest() {
    return new Promise((resolve, reject) => {
      this.loginSecurity.getHeaders().then((headers: any) => {
        this.http.get(VIEW_MANAGER_SENT_REQUEST, { headers: headers }).subscribe((data) => {
          resolve(data);
          console.log('viewManagerSentRequest data inside apiProvider', data);
        }, error2 => {
          reject(error2);
          console.log('viewManagerSentRequest error inside apiProvider', error2);
        });
      }).catch((error) => {
        this.utilityProvider.presentToast('Your session expired.');
        //this.appCtrl .getRootNav().setRoot(SignInPage);
      });
    });
  }

  viewManagerReceivedRequest() {
    return new Promise((resolve, reject) => {
      this.loginSecurity.getHeaders().then((headers: any) => {
        this.http.get(VIEW_MANAGER_REQUEST, { headers: headers }).subscribe((data) => {
          resolve(data);
          console.log('viewManagerReceivedRequest data inside apiProvider', data);
        }, error2 => {
          reject(error2);
          console.log('viewManagerReceivedRequest error inside apiProvider', error2);
        });
      }).catch((error) => {
        this.utilityProvider.presentToast('Your session expired.');
        //this.appCtrl .getRootNav().setRoot(SignInPage);
      });
    });
  }

  updateTeamRequest(requestData) {
    return new Promise((resolve, reject) => {
      this.loginSecurity.getHeaders().then((headers: any) => {
        this.http.post(UPDATE_TEAM_REQUEST, requestData, { headers: headers }).subscribe((data) => {
          resolve(data);
          console.log('updateTeamRequest data inside apiProvider', data);
        }, error2 => {
          reject(error2);
          console.log('updateTeamRequest error inside apiProvider', error2);
        });
      }).catch((error) => {
        this.utilityProvider.presentToast('Your session expired.');
        //this.appCtrl .getRootNav().setRoot(SignInPage);
      });
    });
  }

  createEvent(requestData) {
    return new Promise((resolve, reject) => {
      this.loginSecurity.getHeaders().then((headers: any) => {
        this.http.post(CREATE_EVENT, requestData, { headers: headers }).subscribe((data) => {
          resolve(data);
          console.log('createEvent data inside apiProvider', data);
        }, error2 => {
          reject(error2);
          console.log('createEvent error inside apiProvider', error2);
        });
      }).catch((error) => {
        this.utilityProvider.presentToast('Your session expired.');
        //this.appCtrl .getRootNav().setRoot(SignInPage);
      });
    });
  }

  deleteEvent(requestData) {
    return new Promise((resolve, reject) => {
      this.loginSecurity.getHeaders().then((headers: any) => {
        this.http.post(DELETE_EVENT, requestData, { headers: headers }).subscribe((data) => {
          resolve(data);
          console.log('deleteEvent data inside apiProvider', data);
        }, error2 => {
          reject(error2);
          console.log('deleteEvent error inside apiProvider', error2);
        });
      }).catch((error) => {
        this.utilityProvider.presentToast('Your session expired.');
        //this.appCtrl .getRootNav().setRoot(SignInPage);
      });
    });
  }

  updateEvent(requestData) {
    return new Promise((resolve, reject) => {
      this.loginSecurity.getHeaders().then((headers: any) => {
        this.http.post(UPDATE_EVENT, requestData, { headers: headers }).subscribe((data) => {
          resolve(data);
          console.log('updateEvent data inside apiProvider', data);
        }, error2 => {
          reject(error2);
          console.log('updateEvent error inside apiProvider', error2);
        });
      }).catch((error) => {
        this.utilityProvider.presentToast('Your session expired.');
        //this.appCtrl .getRootNav().setRoot(SignInPage);
      });
    });
  }

  getAllEvents() {
    return new Promise((resolve, reject) => {
      this.loginSecurity.getHeadersWithoutCache().then((headers: any) => {
        this.http.get(GET_ALL_EVENT, { headers: headers }).subscribe((data) => {
          resolve(data);
          console.log('getAllEvents data inside apiProvider', data);
        }, error2 => {
          reject(error2);
          console.log('getAllEvents error inside apiProvider', error2);
        });
      }).catch((error) => {
        this.utilityProvider.presentToast('Your session expired.');
        //this.appCtrl .getRootNav().setRoot(SignInPage );
      });
    });
  }

  eventParticipate(requestData) {
    return new Promise((resolve, reject) => {
      this.loginSecurity.getHeaders().then((headers: any) => {
        this.http.post(EVENT_PARTICIPATE, requestData, { headers: headers }).subscribe((data) => {
          resolve(data);
          console.log('eventsParticipate data inside apiProvider', data);
        }, error2 => {
          reject(error2);
          console.log('eventsParticipate error inside apiProvider', error2);
        });
      }).catch((error) => {
        this.utilityProvider.presentToast('Your session expired.');
        //this.appCtrl .getRootNav().setRoot(SignInPage);
      });
    });
  }
  // fileTransfer.upload(requestData, UPLOAD_PROFILE_NEW_IMAGE, imageFileOptions)

  addMatchDetails(requestData, imageFileOptions) {
    console.log("==requestData==", requestData);
    const fileTransfer: TransferObject = this.transfer.create();
    return new Promise((resolve, reject) => {
      this.loginSecurity.getHeaders().then((headers: any) => {
        console.log("==header1===", headers)
        // imageFileOptions.headers = token
        fileTransfer.upload(requestData, ADD_MATCH_DETAILS, imageFileOptions)
          .then((data: any) => {
            console.log("==pic upload Data==", data)
            // this.http.post(UPLOAD_PROFILE_IMAGE,requestData,{headers:headers}).subscribe((data)=>{
            resolve(JSON.parse(data.response));
            console.log('uploadProfileImage data inside apiProvider', data);
          }, (error) => {
            reject(error);    this.utilityProvider.presentToast(error);
            console.log('uploadProfileImage error inside apiProvider', error);
          });
      }).catch((error) => {
        this.utilityProvider.presentToast('Your session expired.');
        //this.appCtrl .getRootNav().setRoot(SignInPage);
      });
    })
  }


  addMatchDetailsWithioutFile(requestData) {
    return new Promise((resolve, reject) => {
      this.loginSecurity.getHeaders().then((headers: any) => {
        this.http.post(ADD_MATCH_DETAILS, requestData, { headers: headers }).subscribe((data) => {
          resolve(data);
          console.log('addMatchDetails data inside apiProvider', data);
        }, error2 => {
          reject(error2);
          console.log('addMatchDetails error inside apiProvider', error2);
        });
      }).catch((error) => {
        this.utilityProvider.presentToast('Your session expired.');
        //this.appCtrl .getRootNav().setRoot(SignInPage);
      });
    });
  }

  updateMatchDetails(requestData) {
    console.log("== updateMatchDetails requestData==", requestData)
    return new Promise((resolve, reject) => {
      console.log("==updateMatchDetails resolve==", resolve)
      console.log("==updateMatchDetails reject==", reject)
      this.loginSecurity.getHeaders().then((headers: any) => {
        console.log("==updateMatchDetails headers==", headers)
        this.http.post(UPDATE_MATCH_DETAILS, requestData, { headers: headers }).subscribe((data) => {
          resolve(data);
          console.log('updateMatchDetails data inside apiProvider', data);
        }, error2 => {
          reject(error2);
          console.log('updateMatchDetails data inside apiProvider', error2);
        });
      }).catch((error) => {
        this.utilityProvider.presentToast('your session is expired')
      });
    });
  }

  getAllMatch() {
    return new Promise((resolve, reject) => {
      console.log("==getAllMatch resolve==", resolve);
      console.log("==getAllMatch reject==", reject);
      this.loginSecurity.getHeaders().then((headers: any) => {
        this.http.get(GET_MATCH_DETAILS, { headers }).subscribe((data) => {
          resolve(data);
          console.log('getAllMatches data inside apiProvider', data);
        }, error2 => {
          reject(error2);
          console.log('getAllSeasons error inside apiProvider', error2)

        })
      })
      // this.loginSecurity.getHeaders().then((headers:any)=> {
      //   this.http.get(GET_SEASONS, {headers: headers}).subscribe((data) => {
      //     resolve(data);
      //     console.log('getAllSeasons data inside apiProvider', data);
      //   }, error2 => {
      //     reject(error2);
      //     console.log('getAllSeasons error inside apiProvider', error2);
      //   });

    }).catch((error) => {
      this.utilityProvider.presentToast('Your session expired.');
      //this.appCtrl .getRootNav().setRoot(SignInPage);
    });
  }

  createSeason(requestData) {
    return new Promise((resolve, reject) => {
      this.loginSecurity.getHeaders().then((headers: any) => {
        this.loginSecurity.getHeaders().then((headers: any) => {
          this.http.post(CREATE_SEASON, requestData, { headers: headers }).subscribe((data) => {
            resolve(data);
            console.log('createSeason data inside apiProvider', data);
          }, error2 => {
            reject(error2);
            console.log('createSeason error inside apiProvider', error2);
          });
        }).catch((error) => {
          console.log('createSeason headers error inside apiProvider ', error);
        });
      }).catch((error) => {
        this.utilityProvider.presentToast('Your session expired.');
        //this.appCtrl .getRootNav().setRoot(SignInPage);
      });
    });
  }

  getAllSeasons() {
    return new Promise((resolve, reject) => {
      this.loginSecurity.getHeaders().then((headers: any) => {
        this.http.get(GET_SEASONS, { headers: headers }).subscribe((data) => {
          resolve(data);
          console.log('getAllSeasons data inside apiProvider', data);
        }, error2 => {
          reject(error2);
          console.log('getAllSeasons error inside apiProvider', error2);
        });
      }).catch((error) => {
        this.utilityProvider.presentToast('Your session expired.');
        //this.appCtrl .getRootNav().setRoot(SignInPage);
      });
    });
  }

  deleteSeason(requestData) {
    return new Promise((resolve, reject) => {
      this.loginSecurity.getHeaders().then((headers: any) => {
        this.http.post(DELETE_SEASON, requestData, { headers: headers }).subscribe((data) => {
          resolve(data);
          console.log('deleteSeason data inside apiProvider', data);
        }, error2 => {
          reject(error2);
          console.log('deleteSeason error inside apiProvider', error2);
        });
      }).catch((error) => {
        this.utilityProvider.presentToast('Your session expired.');
        //this.appCtrl .getRootNav().setRoot(SignInPage);
      });
    });
  }

  getSeason(requestData) {
    return new Promise((resolve, reject) => {
      this.loginSecurity.getHeaders().then((headers: any) => {
        this.http.post(GET_SEASON, requestData, { headers: headers }).subscribe((data) => {
          resolve(data);
          console.log('getSeason data inside apiProvider', data);
        }, error2 => {
          reject(error2);
          console.log('getSeason error inside apiProvider', error2);
        });
      }).catch((error) => {
        this.utilityProvider.presentToast('Your session expired.');
        //this.appCtrl .getRootNav().setRoot(SignInPage);
      });
    });
  }

  updateSeason(requestData) {
    return new Promise((resolve, reject) => {
      this.loginSecurity.getHeaders().then((headers: any) => {
        this.http.post(UPDATE_SEASON, requestData, { headers: headers }).subscribe((data) => {
          resolve(data);
          console.log('updateSeason data inside apiProvider', data);
        }, error2 => {
          reject(error2);
          console.log('updateSeason error inside apiProvider', error2);
        });
      }).catch((error) => {
        this.utilityProvider.presentToast('Your session expired.');
        //this.appCtrl .getRootNav().setRoot(SignInPage);
      });
    });
  }

  createCricketProfile(requestData) {
    return new Promise((resolve, reject) => {
      this.loginSecurity.getHeaders().then((headers: any) => {
        this.http.post(CREATE_CRICKET_PROFILE, requestData, { headers: headers }).subscribe((data) => {
          resolve(data);
          console.log('createCricketProfile data inside apiProvider', data);
        }, (error) => {
          reject(error);    this.utilityProvider.presentToast(error);
          console.log('createCricketProfile error inside apiProvider', error);
        });
      }).catch((error) => {
        this.utilityProvider.presentToast('Your session expired.');
        //this.appCtrl .getRootNav().setRoot(SignInPage);
      });
    })
  }

  updateCricketProfile(requestData) {
    return new Promise((resolve, reject) => {
      this.loginSecurity.getHeaders().then((headers: any) => {
        this.http.post(UPDATE_CRICKET_PROFILE, requestData, { headers: headers }).subscribe((data) => {
          resolve(data);
          console.log('updateCricketProfile data inside apiProvider', data);
        }, (error) => {
          reject(error);    this.utilityProvider.presentToast(error);
          console.log('updateCricketProfile error inside apiProvider', error);
        });
      }).catch((error) => {
        this.utilityProvider.presentToast('Your session expired.');
        //this.appCtrl .getRootNav().setRoot(SignInPage);
      });
    })
  }

  createFootballProfile(requestData) {
    console.log("==1reqData==", requestData);
    return new Promise((resolve, reject) => {
      this.loginSecurity.getHeaders().then((headers: any) => {
        this.http.post(CREATE_FOOTBALL_PROFILE, requestData, { headers: headers }).subscribe((data) => {
          console.log("==2data==", data);
          resolve(data);
          console.log('createFootballProfile data inside apiProvider', data);
        }, (error) => {
          reject(error);    this.utilityProvider.presentToast(error);
          console.log('createFootballProfile error inside apiProvider', error);
        });
      }).catch((error) => {
        this.utilityProvider.presentToast('Your session expired.');
        //this.appCtrl .getRootNav().setRoot(SignInPage);
      });
    })
  }

  updateFootballProfile(requestData) {
    return new Promise((resolve, reject) => {
      this.loginSecurity.getHeaders().then((headers: any) => {
        this.http.post(UPDATE_FOOTBALL_PROFILE, requestData, { headers: headers }).subscribe((data) => {
          resolve(data);
          console.log('updateFootballProfile data inside apiProvider', data);
        }, (error) => {
          reject(error);    this.utilityProvider.presentToast(error);
          console.log('updateFootballProfile error inside apiProvider', error);
        });
      }).catch((error) => {
        this.utilityProvider.presentToast('Your session expired.');
        //this.appCtrl .getRootNav().setRoot(SignInPage);
      });
    })
  }

  createBasketballProfile(requestData) {
    return new Promise((resolve, reject) => {
      this.loginSecurity.getHeaders().then((headers: any) => {
        this.http.post(CREATE_BASKETBALL_PROFILE, requestData, { headers: headers }).subscribe((data) => {
          resolve(data);
          console.log('createBasketballProfile data inside apiProvider', data);
        }, (error) => {
          reject(error);    this.utilityProvider.presentToast(error);
          console.log('createBasketballProfile error inside apiProvider', error);
        });
      }).catch((error) => {
        this.utilityProvider.presentToast('Your session expired.');
        //this.appCtrl .getRootNav().setRoot(SignInPage);
      });
    })
  }
  // createTennisProfile

  createTennisProfile(requestData) {
    return new Promise((resolve, reject) => {
      this.loginSecurity.getHeaders().then((headers: any) => {
        this.http.post(CREATE_TENNIS_PROFILE, requestData, { headers: headers }).subscribe((data) => {
          resolve(data);
          console.log('createTennisProfile data inside apiProvider', data);
        }, (error) => {
          reject(error);    this.utilityProvider.presentToast(error);
          console.log('createTennisProfile error inside apiProvider', error);
        });
      }).catch((error) => {
        this.utilityProvider.presentToast('Your session expired.');
        //this.appCtrl .getRootNav().setRoot(SignInPage);
      });
    })
  }

  updateBasketballProfile(requestData) {
    return new Promise((resolve, reject) => {
      this.loginSecurity.getHeaders().then((headers: any) => {
        this.http.post(UPDATE_BASKETBALL_PROFILE, requestData, { headers: headers }).subscribe((data) => {
          resolve(data);
          console.log('updateBasketballProfile data inside apiProvider', data);
        }, (error) => {
          reject(error);    this.utilityProvider.presentToast(error);
          console.log('updateBasketballProfile error inside apiProvider', error);
        });
      }).catch((error) => {
        this.utilityProvider.presentToast('Your session expired.');
        //this.appCtrl .getRootNav().setRoot(SignInPage);
      });
    })
  }

  createBaseballProfile(requestData) {
    return new Promise((resolve, reject) => {
      this.loginSecurity.getHeaders().then((headers: any) => {
        this.http.post(CREATE_BASEBALL_PROFILE, requestData, { headers: headers }).subscribe((data) => {
          resolve(data);
          console.log('createBaseballProfile data inside apiProvider', data);
        }, (error) => {
          reject(error);    this.utilityProvider.presentToast(error);
          console.log('createBaseballProfile error inside apiProvider', error);
        });
      }).catch((error) => {
        this.utilityProvider.presentToast('Your session expired.');
        //this.appCtrl .getRootNav().setRoot(SignInPage);
      });
    })
  }

  updateBaseballProfile(requestData) {
    return new Promise((resolve, reject) => {
      this.loginSecurity.getHeaders().then((headers: any) => {
        this.http.post(UPDATE_BASEBALL_PROFILE, requestData, { headers: headers }).subscribe((data) => {
          resolve(data);
          console.log('updateBaseballProfile data inside apiProvider', data);
        }, (error) => {
          reject(error);    this.utilityProvider.presentToast(error);
          console.log('updateBaseballProfile error inside apiProvider', error);
        });
      }).catch((error) => {
        this.utilityProvider.presentToast('Your session expired.');
        //this.appCtrl .getRootNav().setRoot(SignInPage);
      });
    })
  }

  createHockeyProfile(requestData) {
    return new Promise((resolve, reject) => {
      this.loginSecurity.getHeaders().then((headers: any) => {
        this.http.post(CREATE_HOCKEY_PROFILE, requestData, { headers: headers }).subscribe((data) => {
          resolve(data);
          console.log('createHockeyProfile data inside apiProvider', data);
        }, (error) => {
          reject(error);    this.utilityProvider.presentToast(error);
          console.log('createHockeyProfile error inside apiProvider', error);
        });
      }).catch((error) => {
        this.utilityProvider.presentToast('Your session expired.');
        //this.appCtrl .getRootNav().setRoot(SignInPage);
      });
    })
  }

  updateHockeyProfile(requestData) {
    return new Promise((resolve, reject) => {
      this.loginSecurity.getHeaders().then((headers: any) => {
        this.http.post(UPDATE_HOCKEY_PROFILE, requestData, { headers: headers }).subscribe((data) => {
          resolve(data);
          console.log('updateHockeyProfile data inside apiProvider', data);
        }, (error) => {
          reject(error);    this.utilityProvider.presentToast(error);
          console.log('updateHockeyProfile error inside apiProvider', error);
        });
      }).catch((error) => {
        this.utilityProvider.presentToast('Your session expired.');
        //this.appCtrl .getRootNav().setRoot(SignInPage);
      });
    })
  }

  createRugbyProfile(requestData) {
    return new Promise((resolve, reject) => {
      this.loginSecurity.getHeaders().then((headers: any) => {
        this.http.post(CREATE_RUGBY_PROFILE, requestData, { headers: headers }).subscribe((data) => {
          resolve(data);
          console.log('createRugbyProfile data inside apiProvider', data);
        }, (error) => {
          reject(error);    this.utilityProvider.presentToast(error);
          console.log('createRugbyProfile error inside apiProvider', error);
        });
      }).catch((error) => {
        this.utilityProvider.presentToast('Your session expired.');
        //this.appCtrl .getRootNav().setRoot(SignInPage);
      });
    })
  }

  updateRugbyProfile(requestData) {
    return new Promise((resolve, reject) => {
      this.loginSecurity.getHeaders().then((headers: any) => {
        this.http.post(UPDATE_RUGBY_PROFILE, requestData, { headers: headers }).subscribe((data) => {
          resolve(data);
          console.log('updateRugbyProfile data inside apiProvider', data);
        }, (error) => {
          reject(error);    this.utilityProvider.presentToast(error);
          console.log('updateRugbyProfile error inside apiProvider', error);
        });
      }).catch((error) => {
        this.utilityProvider.presentToast('Your session expired.');
        //this.appCtrl .getRootNav().setRoot(SignInPage);
      });
    })
  }

  createGolfProfile(requestData) {
    return new Promise((resolve, reject) => {
      this.loginSecurity.getHeaders().then((headers: any) => {
        this.http.post(CREATE_GOLF_PROFILE, requestData, { headers: headers }).subscribe((data) => {
          resolve(data);
          console.log('createGolfProfile data inside apiProvider', data);
        }, (error) => {
          reject(error);    this.utilityProvider.presentToast(error);
          console.log('createGolfProfile error inside apiProvider', error);
        });
      }).catch((error) => {
        this.utilityProvider.presentToast('Your session expired.');
        //this.appCtrl .getRootNav().setRoot(SignInPage);
      });
    })
  }

  updateGolfProfile(requestData) {
    return new Promise((resolve, reject) => {
      this.loginSecurity.getHeaders().then((headers: any) => {
        this.http.post(UPDATE_GOLF_PROFILE, requestData, { headers: headers }).subscribe((data) => {
          resolve(data);
          console.log('updateGolfProfile data inside apiProvider', data);
        }, (error) => {
          reject(error);    this.utilityProvider.presentToast(error);
          console.log('updateGolfProfile error inside apiProvider', error);
        });
      }).catch((error) => {
        this.utilityProvider.presentToast('Your session expired.');
        //this.appCtrl .getRootNav().setRoot(SignInPage);
      });
    })
  }

  createRunningProfile(requestData) {
    return new Promise((resolve, reject) => {
      this.loginSecurity.getHeaders().then((headers: any) => {
        this.http.post(CREATE_RUNNING_PROFILE, requestData, { headers: headers }).subscribe((data) => {
          resolve(data);
          console.log('createRunningProfile data inside apiProvider', data);
        }, (error) => {
          reject(error);    this.utilityProvider.presentToast(error);
          console.log('createRunningProfile error inside apiProvider', error);
        });
      }).catch((error) => {
        this.utilityProvider.presentToast('Your session expired.');
        //this.appCtrl .getRootNav().setRoot(SignInPage);
      });
    })
  }

  updateRunningProfile(requestData) {
    return new Promise((resolve, reject) => {
      this.loginSecurity.getHeaders().then((headers: any) => {
        this.http.post(UPDATE_RUNNING_PROFILE, requestData, { headers: headers }).subscribe((data) => {
          resolve(data);
          console.log('updateRunningProfile data inside apiProvider', data);
        }, (error) => {
          reject(error);    this.utilityProvider.presentToast(error);
          console.log('updateRunningProfile error inside apiProvider', error);
        });
      }).catch((error) => {
        this.utilityProvider.presentToast('Your session expired.');
        //this.appCtrl .getRootNav().setRoot(SignInPage);
      });
    })
  }

  createSoccerProfile(requestData) {
    return new Promise((resolve, reject) => {
      this.loginSecurity.getHeaders().then((headers: any) => {
        this.http.post(CREATE_SOCCER_PROFILE, requestData, { headers: headers }).subscribe((data) => {
          resolve(data);
          console.log('createSoccerProfile data inside apiProvider', data);
        }, (error) => {
          reject(error);    this.utilityProvider.presentToast(error);
          console.log('createSoccerProfile error inside apiProvider', error);
        });
      }).catch((error) => {
        this.utilityProvider.presentToast('Your session expired.');
        //this.appCtrl .getRootNav().setRoot(SignInPage);
      });
    })
  }

  updateSoccerProfile(requestData) {
    return new Promise((resolve, reject) => {
      this.loginSecurity.getHeaders().then((headers: any) => {
        this.http.post(UPDATE_SOCCER_PROFILE, requestData, { headers: headers }).subscribe((data) => {
          resolve(data);
          console.log('updateSoccerProfile data inside apiProvider', data);
        }, (error) => {
          reject(error);    this.utilityProvider.presentToast(error);
          console.log('updateSoccerProfile error inside apiProvider', error);
        });
      }).catch((error) => {
        this.utilityProvider.presentToast('Your session expired.');
        //this.appCtrl .getRootNav().setRoot(SignInPage);
      });
    })
  }

  createSwimmingProfile(requestData) {
    return new Promise((resolve, reject) => {
      this.loginSecurity.getHeaders().then((headers: any) => {
        this.http.post(CREATE_SWIMMING_PROFILE, requestData, { headers: headers }).subscribe((data) => {
          resolve(data);
          console.log('createSwimmingProfile data inside apiProvider', data);
        }, (error) => {
          reject(error);    this.utilityProvider.presentToast(error);
          console.log('createSwimmingProfile error inside apiProvider', error);
        });
      }).catch((error) => {
        this.utilityProvider.presentToast('Your session expired.');
        //this.appCtrl .getRootNav().setRoot(SignInPage);
      });
    })
  }

  updateSwimmingProfile(requestData) {
    return new Promise((resolve, reject) => {
      this.loginSecurity.getHeaders().then((headers: any) => {
        this.http.post(UPDATE_SWIMMING_PROFILE, requestData, { headers: headers }).subscribe((data) => {
          resolve(data);
          console.log('updateSwimmingProfile data inside apiProvider', data);
        }, (error) => {
          reject(error);    this.utilityProvider.presentToast(error);
          console.log('updateSwimmingProfile error inside apiProvider', error);
        });
      }).catch((error) => {
        this.utilityProvider.presentToast('Your session expired.');
        //this.appCtrl .getRootNav().setRoot(SignInPage);
      });
    })
  }

  // getAllPlayer() {
  //   return new Promise((resolve, reject) => {
  //     this.loginSecurity.getHeaders().then((headers: any) => {
  //       this.http.get(GET_ALL_PLAYER, {headers: headers}).subscribe((data) => {
  //         resolve(data);
  //         console.log('getAllPlayer data inside apiProvider', data);
  //       }, (error2) => {
  //         reject(error2);
  //         console.log('getAllPlayer error inside apiProvider', error2);
  //       });
  //     }).catch((error) => {
  //       this.utilityProvider.presentToast('Your session expired.');
  //       //this.appCtrl .getRootNav().setRoot(SignInPage);
  //     });
  //   });
  // }

  removeProfileImage(requestData) {
    return new Promise((resolve, reject) => {
      this.loginSecurity.getHeaders().then((headers: any) => {
        this.http.post(UPLOAD_PROFILE_NEW_IMAGE, requestData, { headers: headers }).subscribe((data) => {
          resolve(data);
          console.log('Reomde image succes here ', data);
        }, (error2) => {
          reject(error2);
          console.log('images not remove successfully', error2);
        });
      }).catch((error) => {
        this.utilityProvider.presentToast('Your session expired.');
        //this.appCtrl .getRootNav().setRoot(SignInPage);
      });
    });
  }

  // public pathForCacheData(img) {
  //   if (img === null) {
  //     return '';
  //   } else {
  //     // console.log("==pathForImage==", cordova.file.dataDirectory + img)
  //     return cordova.file.dataDirectory + img;
  //   }
  // }

  // sendPictureToServer(imageURI, imageOptions) {
  //   this.utilityProvider.getLoggedInUserRole(LOGIN_KEY).then((userRole) => {
  //   this.apiProvider.uploadGovtId(userRole, imageURI, imageOptions).then((data: any) => {
  //   console.log('upload picture data ', data);
  //   this.userGovernmentIdObject.imageUrl = MyGovtIdEditPage.createImageUrl(data.imageUrl)
  //   }).catch((error) => {
  //   console.log("upload picture error ", error)
  //   })
  //   })
  //   }

  uploadProfileImageTesting(requestData, imageFileOptions) {
    console.log("==requestData==", requestData);
    const fileTransfer: FileTransferObject = this.Filetransfer.create();
    return new Promise((resolve, reject) => {
      this.loginSecurity.getHeaders().then((headers: any) => {
        console.log("==header1===", headers)
        console.log("==requestData===", requestData)
        console.log("==UPLOAD_PROFILE_NEW_IMAGE===", UPLOAD_PROFILE_NEW_IMAGE)
        console.log("==UPLOAD_PROFILE_NEW_IMAGE===", imageFileOptions)

        // imageFileOptions.headers = token
        fileTransfer.upload(requestData, UPLOAD_PROFILE_NEW_IMAGE, imageFileOptions)
          .then((data: any) => {
            console.log("==pic upload Data==", data)
            // this.http.post(UPLOAD_PROFILE_IMAGE,requestData,{headers:headers}).subscribe((data)=>{
            resolve(JSON.parse(data.response));
            console.log('uploadProfileImage data inside apiProvider', data);
          }, (error) => {
            reject(error);    this.utilityProvider.presentToast(error);
            console.log('uploadProfileImage error inside apiProvider', error);
          });
      }).catch((error) => {
        this.utilityProvider.presentToast('Your session expired.');
        //this.appCtrl .getRootNav().setRoot(SignInPage);
      });
    })
  }
  uploadProfileImage(requestData, imageFileOptions) {
    console.log("==requestData==", requestData);
    const fileTransfer: TransferObject = this.transfer.create();
    return new Promise((resolve, reject) => {
      this.loginSecurity.getHeaders().then((headers: any) => {
        console.log("==header1===", headers)
        console.log("==requestData===", requestData)
        console.log("==UPLOAD_PROFILE_NEW_IMAGE===", UPLOAD_PROFILE_NEW_IMAGE)
        console.log("==UPLOAD_PROFILE_NEW_IMAGE===", imageFileOptions)

        // imageFileOptions.headers = token
        fileTransfer.upload(requestData, UPLOAD_PROFILE_NEW_IMAGE, imageFileOptions)
          .then((data: any) => {
            console.log("==pic upload Data==", data)
            // this.http.post(UPLOAD_PROFILE_IMAGE,requestData,{headers:headers}).subscribe((data)=>{
            resolve(JSON.parse(data.response));
            console.log('uploadProfileImage data inside apiProvider', data);
          }, (error) => {
            reject(error);    this.utilityProvider.presentToast(error);
            console.log('uploadProfileImage error inside apiProvider', error);
          });
      }).catch((error) => {
        this.utilityProvider.presentToast('Your session expired.');
        //this.appCtrl .getRootNav().setRoot(SignInPage);
      });
    })
  }


  uploadSponsorImage(requestData, imageFileOptions) {


    console.log("Uplaod sponsor Image  =====", ADD_SPONSOR)
    console.log("Upload Image file option ", imageFileOptions)
    console.log("==requestData==", requestData);
    const fileTransfer: TransferObject = this.transfer.create();
    return new Promise((resolve, reject) => {
      this.loginSecurity.getHeaders().then((headers: any) => {
        console.log("==header1===", headers)
        // imageFileOptions.headers = token
        fileTransfer.upload(requestData, ADD_SPONSOR, imageFileOptions)
          .then((data: any) => {
            console.log("==pic upload Data==", data)
            // this.http.post(UPLOAD_PROFILE_IMAGE,requestData,{headers:headers}).subscribe((data)=>{
            resolve(JSON.parse(data.response));
            console.log('uploadProfileImage data inside apiProvider', data);
          }, (error) => {
            reject(error);    this.utilityProvider.presentToast(error);
            console.log('uploadProfileImage error inside apiProvider', error);
          });
      }).catch((error) => {
        this.utilityProvider.presentToast('Your session expired.');
        //this.appCtrl .getRootNav().setRoot(SignInPage);
      });
    })
  }

  // uploadProfileImages( token , requestData, imageFileOptions) {
  //   console.log("==requestData==", requestData);
  //   const fileTransfer: TransferObject = this.transfer.create();
  //   return new Promise((resolve, reject) => {
  //     this.loginSecurity.getHeaders().then((headers: any) => {
  //       console.log("==header1===", headers)
  //       // imageFileOptions.headers = token
  //       fileTransfer.upload(requestData, UPLOAD_PROFILE_NEW_IMAGE, imageFileOptions)
  //         .then((data) => {
  //           console.log("==pic upload Data==", data)
  //           // this.http.post(UPLOAD_PROFILE_IMAGE,requestData,{headers:headers}).subscribe((data)=>{
  //           resolve(data);
  //           console.log('uploadProfileImage data inside apiProvider', data);
  //         }, (error) => {
  //           reject(error);    this.utilityProvider.presentToast(error);
  //           console.log('uploadProfileImage error inside apiProvider', error);
  //         });
  //     }).catch((error) => {
  //       this.utilityProvider.presentToast('Your session expired.');
  //       //this.appCtrl .getRootNav().setRoot(SignInPage);
  //     });
  //   })
  // }
  uploadProfileImageNew(requestData) {
    console.log("==requestData==", requestData);
    const fileTransfer: TransferObject = this.transfer.create();
    return new Promise((resolve, reject) => {
      this.loginSecurity.getHeaders().then((headers: any) => {
        console.log("==header1===", headers)
        // imageFileOptions.headers = headers
        fileTransfer.upload(requestData, UPLOAD_PROFILE_NEW_IMAGE)
          .then((data) => {
            console.log("==pic upload Data==", data)
            // this.http.post(UPLOAD_PROFILE_IMAGE,requestData,{headers:headers}).subscribe((data)=>{
            resolve(data);
            console.log('uploadProfileImage data inside apiProvider', data);
          }, (error) => {
            reject(error);    this.utilityProvider.presentToast(error);
            console.log('uploadProfileImage error inside apiProvider', error);
          });
      }).catch((error) => {
        this.utilityProvider.presentToast('Your session expired.');
        //this.appCtrl .getRootNav().setRoot(SignInPage);
      });
    })
  }




  // getTeamsTeammates1(){
  //   return new Promise((resolve, reject) => {
  //     this.loginSecurity.getHeaders().then((headers:any)=>{
  //       // let header=headers.append('enctype','multipart/form-data');
  //       // console.log('==headers==',(headers));
  //       this.http.get(PROFILE_TEAMS_TEAMMATES,null,{headers:headers}).subscribe((data)=>{
  //         resolve(data);
  //         console.log('getTeamsTeammates api data',data);
  //       },error2 => {
  //         reject(error2);
  //         console.log('getTeamsTeammates api data',error2);
  //       });
  //     }).catch((error)=>{
  //       console.log();
  //       this.utilityProvider.presentToast('Your session expired.');
  //       // //this.appCtrl  .getRootNav().setRoot(SignInPage);
  //     });
  //   });
  // }

  getTeamsTeammates() {
    return new Promise((resolve, reject) => {
      this.loginSecurity.getHeaders().then((headers: any) => {
        this.http.get(PROFILE_TEAMS_TEAMMATES, { headers: headers }).subscribe((data) => {
          resolve(data);
          console.log('getTeamsTeammates data inside apiProvider', data);
        }, error2 => {
          reject(error2);
          console.log('getTeamsTeammates error inside apiProvider', error2);
        });
      }).catch((error) => {
        this.utilityProvider.presentToast('Your session expired.');
        //this.appCtrl .getRootNav().setRoot(SignInPage);
      });
    });
  }

  // getPlayerSchedule(){
  //   return new Promise((resolve, reject) => {
  //     this.loginSecurity.getHeaders().then((headers:any)=>{
  //       this.http.get(GET_PLAYER_SCHEDULE,{headers:headers}).subscribe((data)=>{
  //         console.log("==GET_PLAYER_SCHEDULE api P==", data)
  //         resolve(data);
  //         console.log('getPlayerSchedule data inside apiProvider',data);
  //       },error2 => {
  //         reject(error2);
  //         console.log('getPlayerSchedule error inside apiProvider',error2);
  //       });
  //     }).catch((error)=>{
  //       this.utilityProvider.presentToast('Your session expired.');
  //       //this.appCtrl .getRootNav().setRoot(SignInPage);
  //     });
  //   });
  // }

  getPlayerSchedule(requestData) {
    return new Promise((resolve, reject) => {
      this.loginSecurity.getHeaders().then((headers: any) => {
        this.http.post(GET_PLAYER_SCHEDULE, requestData, { headers: headers }).subscribe((data) => {
          resolve(data);
          console.log('getPlayerSchedule data inside apiProvider', data);
        }, (error) => {
          reject(error);    this.utilityProvider.presentToast(error);
          console.log('getPlayerSchedule error inside apiProvider', error);
        });
      }).catch((error) => {
        console.log('getPlayerSchedule catch inside apiProvider', error);
        this.utilityProvider.presentToast('Your session expired.');
      });
    })
  }

  playerStatsByTeam() {
    return new Promise((resolve, reject) => {
      this.loginSecurity.getHeaders().then((headers: any) => {
        this.http.get(PLAYER_STATS_BY_TEAM, { headers: headers }).subscribe((data) => {
          console.log("==PLAYER_STATS_BY_TEAM api P==", data)
          resolve(data);
          console.log('playerStatsByTeam data inside apiProvider', data);
        }, error2 => {
          reject(error2);
          console.log('playerStatsByTeam error inside apiProvider', error2);
        });
      }).catch((error) => {
        this.utilityProvider.presentToast('Your session expired.');
        //this.appCtrl .getRootNav().setRoot(SignInPage);
      });
    });
  }

  eventParticipant(requestData) {
    return new Promise((resolve, reject) => {
      this.loginSecurity.getHeaders().then((headers: any) => {
        this.http.post(EVENT_PARTICIPANT, requestData, { headers: headers }).subscribe((data) => {
          resolve(data);
          console.log('eventParticipant data inside apiProvider', data);
        }, (error) => {
          reject(error);    this.utilityProvider.presentToast(error);
          console.log('eventParticipant error inside apiProvider', error);
        });
      }).catch((error) => {
        this.utilityProvider.presentToast('Your session expired.');
        //this.appCtrl .getRootNav().setRoot(SignInPage);
      });
    })
  }

  resendVerificationEmail(requestData) {
    console.log("==requestData==", requestData)
    return new Promise((resolve, reject) => {
      console.log("==resolve==", resolve)
      console.log("==reject==", reject)
      this.http.post(RESEND_VERIFICATION_EMAIL, requestData).subscribe((data) => {
        console.log("==data==", data)
        resolve(data);
        console.log('resendVerificationEmail data inside apiProvider', data);
      }, error2 => {
        reject(error2);
        console.log('resendVerificationEmail error inside apiProvider', error2);
      });

      // this.loginSecurity.getHeaders().then((headers:any)=>{
      //   console.log("==headers==", headers)
      //   this.http.post(RESEND_VERIFICATION_EMAIL, requestData,{headers:headers}).subscribe((data)=>{
      //     console.log("==data==", data)
      //     resolve(data);
      //     console.log('resendVerificationEmail data inside apiProvider',data);
      //   },error2 => {
      //     reject(error2);
      //     console.log('resendVerificationEmail error inside apiProvider',error2);
      //   });
      // }).catch((error)=>{
      //   console.log("==error==", error)
      //   this.utilityProvider.presentToast('Your session expired.');
      //   //this.appCtrl .getRootNav().setRoot(SignInPage);
      // });
    });
  }

  // findTeamsAndEvents

  findTeamsAndEvents(requestData) {
    return new Promise((resolve, reject) => {
      this.loginSecurity.getHeaders().then((headers: any) => {
        this.http.post(FIND_TEAMS_AND_EVENTS, requestData, { headers: headers }).subscribe((data) => {
          resolve(data);
          console.log('findTeamsAndEvents data inside apiProvider', data);
        }, (error) => {
          reject(error);    this.utilityProvider.presentToast(error);
          console.log('findTeamsAndEvents error inside apiProvider', error);
        });
      }).catch((error) => {
        this.utilityProvider.presentToast('Your session expired.');
        //this.appCtrl .getRootNav().setRoot(SignInPage);
      });
    })
  }



  addPaymentMethod(requestData) {
    return new Promise((resolve, reject) => {
      this.loginSecurity.getHeaders().then((headers: any) => {
        this.http.post(ADD_PAYMENT_METHOD, requestData, { headers: headers }).subscribe((data) => {
          resolve(data);
          console.log('addPaymentMethod data inside apiProvider', data);
        }, (error) => {
          reject(error);    this.utilityProvider.presentToast(error);
          console.log('addPaymentMethod error inside apiProvider', error);
        });
      }).catch((error) => {
        this.utilityProvider.presentToast('Your session expired.');
        //this.appCtrl .getRootNav().setRoot(SignInPage);
      });
    })
  }

  createRole(requestData) {
    return new Promise((resolve, reject) => {
      this.loginSecurity.getHeaders().then((headers: any) => {
        this.http.post(CREATE_ROLE, requestData, { headers: headers }).subscribe((data) => {
          resolve(data);
          console.log('userRole data inside apiProvider', data);
        }, (error) => {
          reject(error);    this.utilityProvider.presentToast(error);
          console.log('userRole error inside apiProvider', error);
        });
      }).catch((error) => {
        this.utilityProvider.presentToast('Your session expired.');
        //this.appCtrl .getRootNav().setRoot(SignInPage);
      });
    })
  }

  addInterestedSport(data) {
    return new Promise((resolve, reject) => {
      this.loginSecurity.getHeaders().then((headers: any) => {
        this.http.post(ADD_INTRESTED_SPORT, data, { headers: headers }).subscribe((data) => {
          resolve(data);
          console.log('getTeamsTeammates data inside apiProvider', data);
        }, error2 => {
          reject(error2);
          console.log('getTeamsTeammates error inside apiProvider', error2);
        })
      });
    });
  }

  addLocation(requestData) {
    return new Promise((resolve, reject) => {
      this.loginSecurity.getHeaders().then((headers: any) => {
        this.http.post(ADD_LOCATION, requestData, { headers: headers }).subscribe((data) => {
          resolve(data);
          console.log('addLocation data inside apiProvider', data);
        }, (error) => {
          reject(error);    this.utilityProvider.presentToast(error);
          console.log('addLocation error inside apiProvider', error);
        });
      }).catch((error) => {
        this.utilityProvider.presentToast('Your session expired.');
        //this.appCtrl .getRootNav().setRoot(SignInPage);
      });
    });
  }

  changePassword(requestData) {
    return new Promise((resolve, reject) => {
      this.loginSecurity.getHeaders().then((headers: any) => {
        this.http.post(CHANGE_PASSWORD, requestData, { headers: headers }).subscribe((data) => {
          resolve(data);
          console.log('addLocation data inside apiProvider', data);
        }, (error) => {
          reject(error);    this.utilityProvider.presentToast(error);
          console.log('addLocation error inside apiProvider', error);
        });
      }).catch((error) => {
        this.utilityProvider.presentToast('Your session expired.');
        //this.appCtrl .getRootNav().setRoot(SignInPage);
      });
    });
  }
  getHomePageData() {
    return new Promise((resolve, reject) => {
      this.loginSecurity.getHeadersWithoutCache().then((headers: any) => {
        this.http.get(GET_HOME_PAGE_DATA, { headers: headers }).subscribe((data) => {
          resolve(data);
          console.log('getAllEvents data inside apiProvider', data);
        }, error2 => {
          reject(error2);
          console.log('getAllEvents error inside apiProvider', error2);
        });
      }).catch((error) => {
        this.utilityProvider.presentToast('Your session expired.');
        //this.appCtrl .getRootNav().setRoot(SignInPage );
      });
    });
  }
  addmatchDetails(requestData) {
    return new Promise((resolve, reject) => {
      this.loginSecurity.getHeaders().then((headers: any) => {
        this.http.post(ADD_MATCH_DETAIL, requestData, { headers: headers }).subscribe((data) => {
          resolve(data);
          console.log('addmatchDetails', data);
        }, (error) => {
          reject(error);    this.utilityProvider.presentToast(error);
          console.log('addmatchDetailserror inside apiProvider', error);
        });
      }).catch((error) => {
        this.utilityProvider.presentToast('Your session expired.');
        //this.appCtrl .getRootNav().setRoot(SignInPage);
      });
    });
  }
  createTeams(requestData) {
    return new Promise((resolve, reject) => {
      this.loginSecurity.getHeaders().then((headers: any) => {
        this.http.post(CREATE_TEAMS, requestData, { headers: headers }).subscribe((data) => {
          resolve(data);
          console.log('createTeams', data);
        }, (error) => {
          reject(error);    this.utilityProvider.presentToast(error);
          console.log('createTeams inside apiProvider', error);
        });
      }).catch((error) => {
        this.utilityProvider.presentToast('Your session expired.');
        //this.appCtrl .getRootNav().setRoot(SignInPage);
      });
    });
  }
  createCharges(requestData) {
    return new Promise((resolve, reject) => {
      this.loginSecurity.getHeaders().then((headers: any) => {
        this.http.post(CREATE_CHARGES, requestData, { headers: headers }).subscribe((data) => {
          resolve(data);
          console.log('createTeams', data);
        }, (error) => {
          reject(error);    this.utilityProvider.presentToast(error);
          console.log('createTeams inside apiProvider', error);
        });
      }).catch((error) => {
        this.utilityProvider.presentToast('Your session expired.');
        //this.appCtrl .getRootNav().setRoot(SignInPage);
      });
    });

  }

  getPaymentCardList() {
    return new Promise((resolve, reject) => {
      this.loginSecurity.getHeadersWithoutCache().then((headers: any) => {
        this.http.get(GET_PAYMENT_CARD_LIST, { headers: headers }).subscribe((data) => {
          console.log("==getPaymentCardList api P==", data)
          resolve(data);
          console.log('getPaymentCardList data inside apiProvider', data);
        }, error2 => {
          reject(error2);
          console.log('getPaymentCardList error inside apiProvider', error2);
        });
      }).catch((error) => {
        this.utilityProvider.presentToast('Your session expired.');
        //this.appCtrl .getRootNav().setRoot(SignInPage);
      });
    });
  }


  // getallPlayerNew(requestData) {
  //   return new Promise((resolve, reject) => {
  //     this.loginSecurity.getHeaders().then((headers: any) => {
  //       console.log(headers)
  //       this.http.post(GET_ALL_PLAYER_NEW, {headers: headers}).subscribe((data) => {
  //         console.log("==getallPlayerNew api P==", data)
  //         resolve(data);
  //         console.log('getallPlayerNew data inside apiProvider', data);
  //       }, error2 => {
  //         reject(error2);
  //         console.log('getallPlayerNew error inside apiProvider', error2);
  //       });
  //     }).catch((error) => {
  //       this.utilityProvider.presentToast('Your session expired.');
  //       //this.appCtrl .getRootNav().setRoot(SignInPage);
  //     });
  //   });
  // }

  createRequest(requestData) {
    return new Promise((resolve, reject) => {
      this.loginSecurity.getHeaders().then((headers: any) => {
        this.http.post(CREATE_REQUEST, requestData, { headers: headers }).subscribe((data) => {
          resolve(data);
          console.log('createTeams', data);
        }, (error) => {
          reject(error);    this.utilityProvider.presentToast(error);
          console.log('createTeams inside apiProvider', error);
        });
      }).catch((error) => {
        this.utilityProvider.presentToast('Your session expired.');
        //this.appCtrl .getRootNav().setRoot(SignInPage);
      });
    });

  }

  getallPlayerNew(requestData) {
    return new Promise((resolve, reject) => {
      this.loginSecurity.getHeaders().then((headers: any) => {
        this.http.post(GET_ALL_PLAYER_NEW, requestData, { headers: headers }).subscribe((data) => {
          resolve(data);
          console.log('getallPlayerNew', data);
        }, (error) => {
          reject(error);    this.utilityProvider.presentToast(error);
          console.log('getallPlayerNew inside apiProvider', error);
        });
      }).catch((error) => {
        this.utilityProvider.presentToast('Your session expired.');
        //this.appCtrl .getRootNav().setRoot(SignInPage);
      });
    });

  }

  inviteOtherByEmail(requestData) {
    return new Promise((resolve, reject) => {
      this.loginSecurity.getHeaders().then((headers: any) => {
        this.http.post(INVITE_OTHER_BY_EMAIL, requestData, { headers: headers }).subscribe((data) => {
          resolve(data);
          console.log('inviteOtherByEmail', data);
        }, (error) => {
          reject(error);    this.utilityProvider.presentToast(error);
          console.log('inviteOtherByEmail inside apiProvider', error);
        });
      }).catch((error) => {
        this.utilityProvider.presentToast('Your session expired.');
        //this.appCtrl .getRootNav().setRoot(SignInPage);
      });
    });

  }
  viewInvite() {
    return new Promise((resolve, reject) => {
      this.loginSecurity.getHeadersWithoutCache().then((headers: any) => {
        this.http.get(VIEW_INVITE, { headers: headers }).subscribe((data) => {
          console.log("==viewInvite api P==", data)
          resolve(data);
          console.log('viewInvite data inside apiProvider', data);
        }, error2 => {
          reject(error2);
          console.log('viewInvite error inside apiProvider', error2);
        });
      }).catch((error) => {
        this.utilityProvider.presentToast('Your session expired.');
        //this.appCtrl .getRootNav().setRoot(SignInPage);
      });
    });
  }


  udpadteTeamRequestInvite(requestData) {
    return new Promise((resolve, reject) => {
      this.loginSecurity.getHeaders().then((headers: any) => {
        this.http.post(UPDATED_TEAM_REQUEST, requestData, { headers: headers }).subscribe((data) => {
          resolve(data);
          console.log('udpadteTeamRequestInvite', data);
        }, (error) => {
          reject(error);    this.utilityProvider.presentToast(error);
          console.log('udpadteTeamRequestInvite inside apiProvider', error);
        });
      }).catch((error) => {
        this.utilityProvider.presentToast('Your session expired.');
        //this.appCtrl .getRootNav().setRoot(SignInPage);
      });
    });

  }


  eventParticipantNew(requestData) {
    return new Promise((resolve, reject) => {
      this.loginSecurity.getHeaders().then((headers: any) => {
        this.http.post(EVENT_PARTICIPANT_NEW, requestData, { headers: headers }).subscribe((data) => {
          resolve(data);
          console.log('eventParticipantNew', data);
        }, (error) => {
          reject(error);    this.utilityProvider.presentToast(error);
          console.log('eventParticipantNew inside apiProvider', error);
        });
      }).catch((error) => {
        this.utilityProvider.presentToast('Your session expired.');
        //this.appCtrl .getRootNav().setRoot(SignInPage);
      });
    });

  }


  teamForOpponent(requestData) {
    return new Promise((resolve, reject) => {
      this.loginSecurity.getHeaders().then((headers: any) => {
        this.http.post(TEAM_FOR_OPONENT, requestData, { headers: headers }).subscribe((data) => {
          resolve(data);
          console.log('teamForOpponent', data);
        }, (error) => {
          reject(error);    this.utilityProvider.presentToast(error);
          console.log('teamForOpponent inside apiProvider', error);
        });
      }).catch((error) => {
        this.utilityProvider.presentToast('Your session expired.');
        //this.appCtrl .getRootNav().setRoot(SignInPage);
      });
    });

  }

  getApproveRegistration() {

    return new Promise((resolve, reject) => {
      this.loginSecurity.getHeadersWithoutCache().then((headers: any) => {
        this.http.get(APPROVE_REGISTRATION_DATA, { headers: headers }).subscribe((data) => {
          console.log("==getApproveRegistration api P==", data)
          resolve(data);
          console.log('getApproveRegistration data inside apiProvider', data);
        }, error2 => {
          reject(error2);
          console.log('getApproveRegistration error inside apiProvider', error2);
        });
      }).catch((error) => {
        this.utilityProvider.presentToast('Your session expired.');
        //this.appCtrl .getRootNav().setRoot(SignInPage);
      });
    });

  }



  registereventId(requestData) {
    return new Promise((resolve, reject) => {
      this.loginSecurity.getHeaders().then((headers: any) => {
        this.http.post(REGISTER_EVENT_ID, requestData, { headers: headers }).subscribe((data) => {
          resolve(data);
          console.log('teamForOpponent', data);
        }, (error) => {
          reject(error);    this.utilityProvider.presentToast(error);
          console.log('teamForOpponent inside apiProvider', error);
        });
      }).catch((error) => {
        this.utilityProvider.presentToast('Your session expired.');
        //this.appCtrl .getRootNav().setRoot(SignInPage);
      });
    });

  }

  eventInvite(requestData) {
    return new Promise((resolve, reject) => {
      this.loginSecurity.getHeaders().then((headers: any) => {
        this.http.post(INVITE_EVENT, requestData, { headers: headers }).subscribe((data) => {
          resolve(data);
          console.log('eventInvite', data);
        }, (error) => {
          reject(error);    this.utilityProvider.presentToast(error);
          console.log('eventInvite inside apiProvider', error);
        });
      }).catch((error) => {
        this.utilityProvider.presentToast('Your session expired.');
        //this.appCtrl .getRootNav().setRoot(SignInPage);
      });
    });

  }

  getUserHightLight() {

    return new Promise((resolve, reject) => {
      this.loginSecurity.getHeadersWithoutCache().then((headers: any) => {
        this.http.get(GET_USER_HIGHLIGHT, { headers: headers }).subscribe((data) => {
          console.log("==getUserHightLight api P==", data)
          resolve(data);
          console.log('getUserHightLight data inside apiProvider', data);
        }, error2 => {
          reject(error2);
          console.log('getUserHightLight error inside apiProvider', error2);
        });
      }).catch((error) => {
        this.utilityProvider.presentToast('Your session expired.');
        //this.appCtrl .getRootNav().setRoot(SignInPage);
      });
    });

  }


  // getOneSignalToken() {
  //   return new Promise((resolve, reject) => {
  //     this.oneSignal.startInit("61a70b41-cad1-4592-a97d-eb38b67a7d03", "574354643750")
  //       .inFocusDisplaying(OSDisplayType.Notification)
  //       .endInit();
  //     this.oneSignal.getIds().then((token: any) => {
  //       console.log('data oneSignal', token.userId)
  //       let requestData = {
  //         mobileToken: token.userId
  //       };

  //       this.oneSignal.handleNotificationReceived().subscribe((received) => {
  //         console.log("received notification ", received);
  //       })
  //       resolve(requestData);
  //     }).catch((error) => {
  //       reject(error);    this.utilityProvider.presentToast(error);
  //     })
  //   });
  // }

  getNotification() {

    return new Promise((resolve, reject) => {
      this.loginSecurity.getHeaders().then((headers: any) => {
        this.http.get(GET_NOTIFICATION, { headers: headers }).subscribe((data) => {
          console.log("==getNotification api P==", data)
          resolve(data);
          console.log('getNotification data inside apiProvider', data);
        }, error2 => {
          reject(error2);
          console.log('getNotification error inside apiProvider', error2);
        });
      }).catch((error) => {
        this.utilityProvider.presentToast('Your session expired.');
        //this.appCtrl .getRootNav().setRoot(SignInPage);
      });
    });

  }



  updateNotification(requestData) {
    return new Promise((resolve, reject) => {
      this.loginSecurity.getHeaders().then((headers: any) => {
        this.http.post(UPDATE_NOTIFICATION, requestData, { headers: headers }).subscribe((data) => {
          resolve(data);
          console.log('updateNotification', data);
        }, (error) => {
          reject(error);    this.utilityProvider.presentToast(error);
          console.log('updateNotification inside apiProvider', error);
        });
      }).catch((error) => {
        this.utilityProvider.presentToast('Your session expired.');
        //this.appCtrl .getRootNav().setRoot(SignInPage);
      });
    });

  }

  updateGameTeam(requestData) {
    return new Promise((resolve, reject) => {
      this.loginSecurity.getHeaders().then((headers: any) => {
        this.http.post(UPDATE_GAME_REQUEST, requestData, { headers: headers }).subscribe((data) => {
          resolve(data);
          console.log('updateGameTeam data inside apiProvider', data);
        }, error2 => {
          reject(error2);
          console.log('updateGameTeam error inside apiProvider', error2);
        });
      }).catch((error) => {
        this.utilityProvider.presentToast('Your session expired.');
        //this.appCtrl .getRootNav().setRoot(SignInPage);
      });
    });
  }


  getPlayerForSetLineUp(requestData) {
    return new Promise((resolve, reject) => {
      this.loginSecurity.getHeaders().then((headers: any) => {
        this.http.post(GET_PLAYER_SET_LINEUP, requestData, { headers: headers }).subscribe((data) => {
          resolve(data);
          console.log('updateGameTeam data inside apiProvider', data);
        }, error2 => {
          reject(error2);
          console.log('updateGameTeam error inside apiProvider', error2);
        });
      }).catch((error) => {
        this.utilityProvider.presentToast('Your session expired.');
        //this.appCtrl .getRootNav().setRoot(SignInPage);
      });
    });
  }

  notifyTeam(requestData) {
    return new Promise((resolve, reject) => {
      this.loginSecurity.getHeaders().then((headers: any) => {
        this.http.post(NOTIFY_TEAM, requestData, { headers: headers }).subscribe((data) => {
          resolve(data);
          console.log('notifyTeam data inside apiProvider', data);
        }, error2 => {
          reject(error2);
          console.log('notifyTeam error inside apiProvider', error2);
        });
      }).catch((error) => {
        this.utilityProvider.presentToast('Your session expired.');
        //this.appCtrl .getRootNav().setRoot(SignInPage);
      });
    });
  }


  createSetLineup(requestData) {
    return new Promise((resolve, reject) => {
      this.loginSecurity.getHeaders().then((headers: any) => {
        this.http.post(CREATE_SET_LINE_UP, requestData, { headers: headers }).subscribe((data) => {
          resolve(data);
          console.log('createSetLineup data inside apiProvider', data);
        }, error2 => {
          reject(error2);
          console.log('createSetLineup error inside apiProvider', error2);
        });
      }).catch((error) => {
        this.utilityProvider.presentToast('Your session expired.');
        //this.appCtrl .getRootNav().setRoot(SignInPage);
      });
    });
  }


  uploadHightLight(requestData, imageFileOptions) {
    console.log("==requestData==", requestData);
    const fileTransfer: TransferObject = this.transfer.create();
    return new Promise((resolve, reject) => {
      this.loginSecurity.getHeaders().then((headers: any) => {
        console.log("==header1===", headers)
        // imageFileOptions.headers = token
        fileTransfer.upload(requestData, UPLAD_HIGHLIGHT_NEW, imageFileOptions)
          .then((data: any) => {
            console.log("==pic upload Data==", data)
            // this.http.post(UPLOAD_PROFILE_IMAGE,requestData,{headers:headers}).subscribe((data)=>{
            resolve(JSON.parse(data.response));
            console.log('uploadHightLight data inside apiProvider', data);
          }, (error) => {
            reject(error);    this.utilityProvider.presentToast(error);
            console.log('uploadHightLight error inside apiProvider', error);
          });
      }).catch((error) => {
        this.utilityProvider.presentToast('Your session expired.');
        //this.appCtrl .getRootNav().setRoot(SignInPage);
      });
    })
  }


  getTeammatesAndEvents() {

    return new Promise((resolve, reject) => {
      this.loginSecurity.getHeaders().then((headers: any) => {
        this.http.get(GET_TEAMMATES_EVENT, { headers: headers }).subscribe((data) => {
          console.log("==getTeammatesAndEvents api P==", data)
          resolve(data);
          console.log('getTeammatesAndEvents data inside apiProvider', data);
        }, error2 => {
          reject(error2);
          console.log('getTeammatesAndEvents error inside apiProvider', error2);
        });
      }).catch((error) => {
        this.utilityProvider.presentToast('Your session expired.');
        //this.appCtrl .getRootNav().setRoot(SignInPage);
      });
    });

  }

  clearAllNotify(requestData) {
    return new Promise((resolve, reject) => {
      this.loginSecurity.getHeaders().then((headers: any) => {
        this.http.post(UPDATE_NOTIFICATION, requestData, { headers: headers }).subscribe((data) => {
          resolve(data);

          console.log('clearAllNotify data inside apiProvider', data);
        }, error2 => {
          reject(error2);
          console.log('clearAllNotify error inside apiProvider', error2);
        });
      }).catch((error) => {
        this.utilityProvider.presentToast('Your session expired.');
        //this.appCtrl .getRootNav().setRoot(SignInPage);
      });
    });
  }

  getPlayerStatView(requestData) {
    return new Promise((resolve, reject) => {
      this.loginSecurity.getHeaders().then((headers: any) => {
        this.http.post(GET_PLAYER_STAT_VIEW, requestData, { headers: headers }).subscribe((data) => {
          resolve(data);

          console.log('getPlayerStatView data inside apiProvider', data);
        }, error2 => {
          reject(error2);
          console.log('getPlayerStatView error inside apiProvider', error2);
        });
      }).catch((error) => {
        this.utilityProvider.presentToast('Your session expired.');
        //this.appCtrl .getRootNav().setRoot(SignInPage);
      });
    });
  }

  getMatchListStatCaptue(){

    return new Promise((resolve, reject) => {
      this.loginSecurity.getHeadersWithoutCache().then((headers: any) => {
        this.http.get(GET_MATCH_LIST_STAT_CAPTURE, { headers: headers }).subscribe((data) => {
          console.log("==getTeammatesAndEvents api P==", data)
          resolve(data);
          console.log('getTeammatesAndEvents data inside apiProvider', data);
        }, error2 => {
          reject(error2);
          console.log('getTeammatesAndEvents error inside apiProvider', error2);
        });
      }).catch((error) => {
        this.utilityProvider.presentToast('Your session expired.');
        //this.appCtrl .getRootNav().setRoot(SignInPage);
      });
    });

  }


  getEventForRegistrationComplete(requestData) {
    return new Promise((resolve, reject) => {
      this.loginSecurity.getHeaders().then((headers: any) => {
        this.http.post(GET_EVENT_BY_ID_REGISTRATION_CONFIRMATION_PAGE, requestData, { headers: headers }).subscribe((data) => {
          resolve(data);

          console.log('getEventForRegistrationComplete data inside apiProvider', data);
        }, error2 => {
          reject(error2);
          console.log('getEventForRegistrationComplete error inside apiProvider', error2);
        });
      }).catch((error) => {
        this.utilityProvider.presentToast('Your session expired.');
        //this.appCtrl .getRootNav().setRoot(SignInPage);
      });
    });
  }



  createPlayerStat(requestData) {
    return new Promise((resolve, reject) => {
      this.loginSecurity.getHeaders().then((headers: any) => {
        this.http.post(CREATE_PLAYER_STAT, requestData, { headers: headers }).subscribe((data) => {
          resolve(data);

          console.log('createPlayerStat data inside apiProvider', data);
        }, error2 => {
          reject(error2);
          console.log('createPlayerStat error inside apiProvider', error2);
        });
      }).catch((error) => {
        this.utilityProvider.presentToast('Your session expired.');
        //this.appCtrl .getRootNav().setRoot(SignInPage);
      });
    });
  }
  validatePlayerStat(requestData) {
    return new Promise((resolve, reject) => {
      this.loginSecurity.getHeaders().then((headers: any) => {
        this.http.post(VALIDATE_PLAYER_STAT, requestData, { headers: headers }).subscribe((data) => {
          resolve(data);

          console.log('createPlayerStat data inside apiProvider', data);
        }, error2 => {
          reject(error2);
          console.log('createPlayerStat error inside apiProvider', error2);
        });
      }).catch((error) => {
        this.utilityProvider.presentToast('Your session expired.');
        //this.appCtrl .getRootNav().setRoot(SignInPage);
      });
    });
  }
  getPlayerStat(requestData) {
    return new Promise((resolve, reject) => {
      this.loginSecurity.getHeaders().then((headers: any) => {
        this.http.post(GET_PLAYER_STAT, requestData, { headers: headers }).subscribe((data) => {
          resolve(data);

          console.log('getPlayerStat data inside apiProvider', data);
        }, error2 => {
          reject(error2);
          console.log('getPlayerStat error inside apiProvider', error2);
        });
      }).catch((error) => {
        this.utilityProvider.presentToast('Your session expired.');
        //this.appCtrl .getRootNav().setRoot(SignInPage);
      });
    });
  }
  updateTeamEdit(requestData) {
    return new Promise((resolve, reject) => {
      this.loginSecurity.getHeaders().then((headers: any) => {
        this.http.post(UPDATE_TEAM_EDIT, requestData, { headers: headers }).subscribe((data) => {
          resolve(data);

          console.log('getPlayerStat data inside apiProvider', data);
        }, error2 => {
          reject(error2);
          console.log('getPlayerStat error inside apiProvider', error2);
        });
      }).catch((error) => {
        this.utilityProvider.presentToast('Your session expired.');
        //this.appCtrl .getRootNav().setRoot(SignInPage);
      });
    });
  }

  getMatchStat(requestData) {
    return new Promise((resolve, reject) => {
      this.loginSecurity.getHeaders().then((headers: any) => {
        this.http.post(GET_MATCH_STAT, requestData, { headers: headers }).subscribe((data) => {
          resolve(data);

          console.log('getMatchStat data inside apiProvider', data);
        }, error2 => {
          reject(error2);
          console.log('getMatchStat error inside apiProvider', error2);
        });
      }).catch((error) => {
        this.utilityProvider.presentToast('Your session expired.');
        //this.appCtrl .getRootNav().setRoot(SignInPage);
      });
    });
  }

  // GET_TEAM_LIST_FOR_STAT_SEARCH
  getTeamListForStatSearch(requestData) {
    return new Promise((resolve, reject) => {
      this.loginSecurity.getHeaders().then((headers: any) => {
        this.http.post(GET_TEAM_LIST_FOR_STAT_SEARCH, requestData, { headers: headers }).subscribe((data) => {
          resolve(data);

          console.log('GET_TEAM_LIST_FOR_STAT_SEARCH data inside apiProvider', data);
        }, error2 => {
          reject(error2);
          console.log('GET_TEAM_LIST_FOR_STAT_SEARCH error inside apiProvider', error2);
        });
      }).catch((error) => {
        this.utilityProvider.presentToast('Your session expired.');
        //this.appCtrl .getRootNav().setRoot(SignInPage);
      });
    });
  }
  statSearch(requestData) {
    return new Promise((resolve, reject) => {
      this.loginSecurity.getHeaders().then((headers: any) => {
        this.http.post(STAT_SEARCH, requestData, { headers: headers }).subscribe((data) => {
          resolve(data);

          console.log('statSearch data inside apiProvider', data);
        }, error2 => {
          reject(error2);
          console.log('statSearch error inside apiProvider', error2);
        });
      }).catch((error) => {
        this.utilityProvider.presentToast('Your session expired.');
        //this.appCtrl .getRootNav().setRoot(SignInPage);
      });
    });
  }
  manageRoster(requestData) {
    return new Promise((resolve, reject) => {
      this.loginSecurity.getHeaders().then((headers: any) => {
        this.http.post(MANAGE_ROSTER, requestData, { headers: headers }).subscribe((data) => {
          resolve(data);

          console.log('manageRoster data inside apiProvider', data);
        }, error2 => {
          reject(error2);
          console.log('manageRoster error inside apiProvider', error2);
        });
      }).catch((error) => {
        this.utilityProvider.presentToast('Your session expired.');
        //this.appCtrl .getRootNav().setRoot(SignInPage);
      });
    });
  }
}
