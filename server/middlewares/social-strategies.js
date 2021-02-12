const AzureAdOAuth2Strategy = require("passport-azure-ad").BearerStrategy;
// var FacebookTokenStrategy = require("passport-facebook-token");
var GoogleTokenStrategy = require("passport-google-token").Strategy;
var GitHubTokenStrategy = require("passport-github-token");
const User = require("../models/User");
const passport = require("passport");

let githubStrategy = new GitHubTokenStrategy(
  {
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    passReqToCallback: true,
  },
  function (req, accessToken, refreshToken, profile, done) {
    User.upsertGithubUser(
      accessToken,
      refreshToken,
      profile,
      function (err, user) {
        return done(err, user);
      }
    );
  }
);

let azureStrategy = new AzureAdOAuth2Strategy(
  {
    clientID: process.env.AZURE_AD_CLIENT_ID,
    validateIssuer: true,
    passReqToCallback: false,
    loggingLevel: "error",
    //loggingNoPII: false,
    identityMetadata: process.env.AZURE_META,
    issuer: process.env.AZURE_ISUSER,
    resourceURL: "https://graph.windows.net",
    allowMultiAudiencesInToken: true,
    responseType: "id_token code",
  },
  function (token, done) {
    User.upsertAzureUser(token, function (err, user) {
      done(err, user);
    });
  }
);

let googleStrategy = new GoogleTokenStrategy(
  {
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  },
  function (accessToken, refreshToken, profile, done) {
    User.upsertGoogleUser(
      accessToken,
      refreshToken,
      profile,
      function (err, user) {
        return done(err, user);
      }
    );
  }
);

// let facebookStrategy = new FacebookTokenStrategy(
//   {
//     clientID: process.env.FB_CLIENT_ID,
//     clientSecret: process.env.FB_CLIENT_SECRET,
//   },
//   function (accessToken, refreshToken, profile, done) {
//     User.upsertFbUser(accessToken, refreshToken, profile, function (err, user) {
//       return done(err, user);
//     });
//   }
// );

passport.use(azureStrategy);
passport.use(googleStrategy);
passport.use(githubStrategy);
// passport.use(facebookStrategy);

module.exports = passport;
