// SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;
contract StoreData{
    address admin; // admin 
    uint8 user_id = 1; // user id start from 1
    uint8 work_id = 1;
    uint8 count = 0 ; 
    mapping(uint8 => address ) request_MainUser; // main user request
    mapping(address => bool) request_user;// request for main user
    uint8[] req_mapping_keys;


    struct info{ // struct for info and data of user
        uint8 work_id;
        address user;
        mapping (uint256 => string) title;
        mapping (uint256 => string) Img_data;
        uint256[] mapping_keys;
        string password;
        string old_password;        
        string first_name;
        string old_first_name;
        string middle_name;
        string old_middle_name;
        string sur_name;
        string old_sur_name;
        string gender;
        string date_of_birth;
        string Address;
        string old_Address;
        string email;
        string old_email;
        uint256 phone_no;
        uint256 old_phone_no;
        uint256 creation;
        uint8 updation;
        uint8 nounce;
    }
     
    
    mapping (uint8 => info) user_info; // to store user info and data 
    mapping (address => bool) main_user; 
    mapping (uint256 => mapping(address => bool)) allow_user;// user to allow show data 
    mapping (address => bool) users; 
    mapping (address => uint8) userID;

    modifier onlyadmin(){ // modfier fo only admin 
        require(msg.sender == admin,"only admin");
        _;
    }
    modifier onlymainuser(){ // modifer for main user
        require(main_user[msg.sender] == true,"only mainuser");
        _;
    }
    modifier onlyauthenticate(uint8 _userId,uint8 _workId,address _user){ // modifer user for authenticate user
        require(user_info[_userId].user == _user || allow_user[_workId][_user] == true || _user == admin,"user not granted");
        _;
    }

    constructor(){
        admin = msg.sender;
    }

    // user upload his data after inputting info
    function inputData(uint8 _userid , string memory _title, string memory _data) public {
        require (user_info[_userid].user == msg.sender, "user not valid"); 
            user_info[_userid].title[work_id] = _title;
          user_info[_userid].Img_data[work_id] = _data;
           user_info[_userid].mapping_keys.push(work_id);
            work_id++;
    }

    // add information of user
    function addInfo(string memory _password,string memory _first_name,
        string memory _middle_name,string memory _sur_name,string memory _gender,string memory _date_of_birth,
        string memory _Address,string memory _email,uint256 _phone_no) public returns(uint8 your_user_id){
        require (users[msg.sender] != true,"user already stored ");
        user_info[user_id].password = _password;
        user_info[user_id].first_name = _first_name;
        user_info[user_id].middle_name = _middle_name;
        user_info[user_id].sur_name = _sur_name;
        user_info[user_id].gender = _gender;
        user_info[user_id].date_of_birth = _date_of_birth;
        user_info[user_id].Address = _Address;
        user_info[user_id].email = _email;
        user_info[user_id].phone_no = _phone_no; 
        users[msg.sender] = true;
        userID[msg.sender] = user_id;
        user_info[user_id].user = msg.sender;
        uint8 id= user_id;
        user_id ++ ;
        return id;
    }
    
    // main user can update his password
    function updatePassword(uint8 _id,string memory _newpassword) public onlymainuser {
        require (user_info[_id].user == msg.sender,"user not valid");
        require(main_user[msg.sender] == true,"main can update");
        user_info[_id].old_password = user_info[_id].password;
        user_info[_id].password = _newpassword;
    }
    // main user can update his first name
    function updateFirstName(uint8 _id,string memory _new_first_name) public onlymainuser {
        require (user_info[_id].user == msg.sender,"user not valid");
        require(main_user[msg.sender] == true,"main can update");
        user_info[_id].old_first_name = user_info[_id].first_name;
        user_info[_id].first_name = _new_first_name;
    }
    // main user can update his middle name
    function updateMiddleName(uint8 _id,string memory _new_middle_name) public onlymainuser {
        require (user_info[_id].user == msg.sender,"user not valid");
        require(main_user[msg.sender] == true,"main can update");
        user_info[_id].old_middle_name = user_info[_id].middle_name;
        user_info[_id].middle_name = _new_middle_name;
    }
    // main user can update his sur name
    function updateSurName(uint8 _id,string memory _new_sur_name) public onlymainuser {
        require (user_info[_id].user == msg.sender,"user not valid");
        require(main_user[msg.sender] == true,"main can update");
        user_info[_id].old_sur_name = user_info[_id].sur_name;
        user_info[_id].sur_name = _new_sur_name;
    }
    // main user can update his address
    function updateAddress(uint8 _id,string memory _newAddress) public onlymainuser {
        require (user_info[_id].user == msg.sender,"user not valid");
        require(main_user[msg.sender] == true,"main can update");
        user_info[_id].old_Address = user_info[_id].Address;
        user_info[_id].Address = _newAddress;
    }
    // main user can update his Email
    function updateEmail(uint8 _id,string memory _newemail) public onlymainuser {
        require (user_info[_id].user == msg.sender,"user not valid");
        require(main_user[msg.sender] == true,"main can update");
        user_info[_id].old_email = user_info[_id].email;
        user_info[_id].email = _newemail;
    }
    // main user can update his phone Number
    function updatePhone(uint8 _id,uint256 _new_phone_number) public onlymainuser {
        require (user_info[_id].user == msg.sender,"user not valid");
        require(main_user[msg.sender] == true,"main can update");
        user_info[_id].old_phone_no= user_info[_id].phone_no;
        user_info[_id].phone_no = _new_phone_number;
    }
    
    // main user can update his input data
    function updateInputData(uint8 _workid,uint8 _userid,string memory updatetitile,string memory updateimage) public {
        require (user_info[_userid].user == msg.sender,"user not valid"); 
        require (user_info[_userid].work_id == _workid,"invalid workid");
        require(main_user[msg.sender] == true,"main can update");
        for (uint8 i = 0 ; i <= user_info[_userid].mapping_keys.length ; i++)
        {
            if(user_info[_userid].mapping_keys[i] == _workid){
                user_info[_userid].Img_data[_workid] =  updateimage;
                user_info[_userid].title[_workid] =  updatetitile;
            }
        }
        user_info[_userid].nounce +=1; 
    }
    // main user can allow user to see his data
    function allowedUser(uint8 _userid,uint8 _workid,address _user) public onlymainuser {
          for (uint8 i = 0 ; i <= user_info[_userid].mapping_keys.length ; i++)
        {
            if(user_info[_userid].mapping_keys[i] == _workid){
                require (user_info[_userid].work_id == _workid,"invalid workid");
                require(main_user[msg.sender] == true,"main can update");
                allow_user[_workid][_user] =  true;
                }
        }
        
    }

    // main user can remove user who is allowed to see his data
    function removeAllowedUser(uint8 _userid,uint8 _workid,address _user) public onlymainuser {
        require (user_info[_userid].work_id == _workid,"invalid workid");
        require (allow_user[_workid][_user] ==  true,"user is not collaborator");
        require(main_user[msg.sender] == true,"main can update");
        allow_user[_workid][_user] =  false;
    }
    
    // collborator get data
    function getDataCollaborator(uint8 _userid,uint8 _workId,address _user) public view onlyauthenticate(_userid,_workId,_user) returns (string memory _Image, string memory _Ttile, uint8 workid) {
        for (uint8 i = 0 ; i <= user_info[_userid].mapping_keys.length ; i++)
        {
            if(user_info[_userid].mapping_keys[i] == _workId){
                return (user_info[_userid].Img_data[_workId],user_info[_userid].title[_workId], _workId);
                }
        }
    }

    // user get data 
    function getGuestData(uint8 _userId)  public view returns (
        string memory,
        string memory,
        string memory,
        string memory,
        string memory,
        string memory,
        string memory,
        string memory,
        uint256) {
        info storage i = user_info[_userId];
        return(
            i.password,
            i.first_name,
            i.middle_name,
            i.sur_name,
            i.gender,
            i.date_of_birth,
            i.Address,
            i.email,
            i.phone_no);
    }
    //get all data of user or guest user
      function getalldata(uint8 _userid) public view returns (string[] memory images, string[] memory titles, uint256[] memory workids) {
            require (user_info[_userid].user == msg.sender,"user not valid"); 
            string[] memory values = new string[](user_info[_userid].mapping_keys.length);
            string[] memory values2 = new string[](user_info[_userid].mapping_keys.length);

            for (uint256 i= 0 ; i< user_info[_userid].mapping_keys.length ; i++){
                values[i] = user_info[_userid].Img_data[user_info[_userid].mapping_keys[i]];
            }

            for (uint256 i= 0 ; i< user_info[_userid].mapping_keys.length ; i++){
                values2[i] = user_info[_userid].title[user_info[_userid].mapping_keys[i]];
            }
            
            return (values ,values2,user_info[_userid].mapping_keys);
        }

    //get updated and old data of users
    function getupdateddata(uint8 _userid) public view returns (string[] memory data, uint256[] memory data2) {
        info storage i = user_info[_userid];
        string[] memory arr = new string[](10);
        uint256[] memory arr2 = new uint256[](2);
        arr[0] = (i.password);
        arr[1] = (i.old_password);
        arr[2] = (i.first_name);
        arr[3] = (i.old_first_name);
        arr[4] = (i.password);
        arr[5] = (i.password);
        arr[6] = (i.password);
        arr[7] = (i.password);
        arr[8] = (i.password);
        arr[9] = (i.password);
        arr[10] = (i.password);
        arr[11] = (i.password);
        arr2[0] = (i.phone_no);
        arr2[1] = (i.old_phone_no);
        return (arr , arr2);
    }

    // get user id 
    function getUserId(address _user) public view returns(uint8){
        return userID[_user];
    }    

    // request to admin for main user
    function requestMainUser() public {
        require(request_user[msg.sender]== false,"user already requested");
        require(main_user[msg.sender]==false,"user already main user");
        request_user[msg.sender] = true;
        
        uint8 id = userID[msg.sender];
        require(id != 0 , "you are not able to put request");
        req_mapping_keys.push(id);
        request_MainUser[id]= msg.sender;
    }


    // owner accept the request of user for main user
    function acceptMainUser(address _user) public onlyadmin {
        main_user[_user] = true; 
        request_user[_user]== false;
        uint8 id = userID[_user];
        uint8 index;

            for (uint8 i = 0; i < req_mapping_keys.length; i++) {
                    if (req_mapping_keys[i] == id) {
                        index = i;
                    }
            }

            require(index <= req_mapping_keys.length, "Index out of bounds");
                for (uint i = index; i < req_mapping_keys.length - 1; i++) {
                req_mapping_keys[i] = req_mapping_keys[i+1];
                }
        req_mapping_keys.pop();
    }

    // owner can remove the address from main user
    function removeMainUser(address _mainuser) public onlyadmin{
        require(main_user[_mainuser] == true,"user is not main user");
        main_user[_mainuser] = false;
    }


    // get user who request for main user
    function getRequestedUser() public view onlyadmin returns (address[] memory){
        address[] memory requestedUser = new address[](req_mapping_keys.length);
        for(uint8 i = 0; i< req_mapping_keys.length; i ++){
            requestedUser[i] = request_MainUser[req_mapping_keys[i]];
        }
        return requestedUser;
    }
}