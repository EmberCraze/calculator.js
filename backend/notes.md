upon entering the site, the user checks if they have a token present. 
    If they do, they will use that token for validation.
    Else they will request a new token. Requesting a token generates a new token.
    
The token is what differenciates users.

The user object will have a token, it will also be connected to a screen. 

Once a validated request comes in we match the token to a user so we can access the screen of that user.

There should be an action to update the screen and an action to calculate what is on the screen.

