get "/login" do
  erb :"/session/new"
end

post '/login' do
  p params[:email]
  p params[:password]
  @user = User.find_by(email: params[:email])
  p @user
  if @user && @user.authenticate(params[:password])
   session[:user_id] = @user.id
   redirect '/'
  else
    @message = "email or password incorrect"
    erb :'/session/new'
  end
end

delete '/logout' do
  session.delete(:user_id)
  redirect '/'
end
