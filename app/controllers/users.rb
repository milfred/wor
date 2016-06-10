get "/register" do
  erb :"/users/new"
end

post "/register" do
  @user = User.new(params[:user])

  if @user.save
    session[:user_id] = @user.id
    redirect "/"
  else
    @errors = @user.errors.messages
    erb :"/users/new"
  end
end

get "/users/:id" do
  @user = User.find(params[:id])
  erb :"/users/show"
end
