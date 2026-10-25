let place = {
    placename: 'office',
    behaviour: 'professional',
    sayhello: function() {
        const insideplace = {
            placename: 'meeting room',
            behaviour: 'roasting',
            sayhi: function(){
                console.log(this.behaviour);
            }
        }
    }
}