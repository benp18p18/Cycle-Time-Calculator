$(function() {
    
    if(sessionStorage.getItem("cycleRate"))
    {
        $("#standardRateOutputCycle").html("<i>Cycle Time</i> = <b><u>" + sessionStorage.getItem("cycleRate") + "</u> </b><small>Seconds/Unit</small>"); 
        $("#standardRateOutputHour").html("<i>Hourly Rate</i> = <b><u>" + sessionStorage.getItem("hourlyRate") + "</u> </b><small>Units/Hour</small>" ); 
        $("#standardRateOutputShift").html("<i>Shift Rate</i> = <b><u>" + sessionStorage.getItem("shiftRate") + "</u> </b><small>Units/Shift</small>");
    }
    
    $("#standardRateForm").submit(function(){
        var rate = $("#standardRateInput").val(); 
        var crew = $("#crewSizeInput").val();
        var cycleRate = (60*60)/(crew * rate);
        var shiftRate = rate*crew*8;
        var hourlyRate = rate*crew;
        sessionStorage.setItem("cycleRate", String(Math.round(cycleRate*100)/100));
        sessionStorage.setItem("shiftRate", String(Math.round(shiftRate*100)/100));
        sessionStorage.setItem("hourlyRate", String(Math.round(hourlyRate*100)/100));
    })
});