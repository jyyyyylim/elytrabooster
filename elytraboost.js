//elytraboost by JYLim
//credits to ArceusMatt for the GUI template

var GUI;

function newLevel(){
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
        try{
            var layout = new android.widget.LinearLayout(ctx);
            layout.setOrientation(1);

            var button = new android.widget.Button(ctx);
            button.setText("💨✈");
            
            //NOTE: 0.3 = 1 block
            
            button.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
                    var player = Player.getEntity();
                    Entity.setVelY(player, 0.45);
                }
            }));
            layout.addView(button);

            GUI = new android.widget.PopupWindow(layout, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
            GUI.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
            GUI.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT | android.view.Gravity.TOP, 0, 0);
        }catch(err){
            print("An error occured: " + err);
        }
    }}));
}


function leaveGame(){
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
        if(GUI != null){
            GUI.dismiss();
            GUI = null;
        }
    }}));
}