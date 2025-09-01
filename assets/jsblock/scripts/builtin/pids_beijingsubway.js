include(Resources.id("jsblock:scripts/pids_util.js"));

function create(ctx, state, pids) {
}

function render(ctx, state, pids) {
    let arrival = pids.arrivals().get(0);
    let height = pids.height;
    let width = height*1.35;
    let scaleNum = 2.5
    let StaName = pids.station()["name"]
    Texture.create("background")
    .texture("jsblock:textures/white.png")
    .size(width,height)
    .draw(ctx);
    Texture.create()
    .texture("jsblock:textures/line.png")
    .color(arrival.routeColor())
    .size(width,4)
    .pos(0,height*0.55)
    .draw(ctx);

    if(StaName.length()<=4){
        scaleNum = 2.5
    }else{
        scaleNum = 10/StaName.length()
    }
    Text.create()
    .text(StaName)
    .color(0x000000)
    .centerAlign()
    .pos(width*0.5,height*0.15)
    .scale(scaleNum)
    .draw(ctx);

    if(arrival.terminating()){
        Text.create()
        .text("终点站")
        .color(0x000000)
        .pos(width*0.5,height*0.5)
        .centerAlign()
        .scaleXY()
        .scale(1.7)
        .draw(ctx)
    }else{
    Text.create()
    .text(arrival.destination())
    .color(0x000000)
    .pos(width*0.3,height*0.5)
    .scaleXY()
    .scale(1.7)
    .draw(ctx);

    Text.create()
    .text("开往")
    .color(0x000000)
    .pos(width*0.08,height*0.78)
    .scale(0.95)
    .draw(ctx);
    }

}

function dispose(ctx, state, pids) {
}
