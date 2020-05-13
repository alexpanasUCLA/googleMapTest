export interface Mappable {
    location: {
        lat: number,
        lng: number,
    },
    content: string,
    
}

export class CustomMap {

    private customMap: google.maps.Map;

    constructor(divId:string) {

        this.customMap = new google.maps.Map(document.getElementById(divId),{
            zoom:1,
            center: {
                lat: 0,
                lng:0
            }
        });
        
    }

    addMarker(marker:Mappable):void {
        
        const map = this.customMap;
        const myMarker = new google.maps.Marker({
            map,
            position: {
                lat: marker.location.lat,
                lng: marker.location.lng,
            },
        
        });
        myMarker.addListener('click',function(){
            const infowindow = new google.maps.InfoWindow({
                content: marker.content,
            });
            infowindow.open(map,myMarker)
 
        })
        
    }




}