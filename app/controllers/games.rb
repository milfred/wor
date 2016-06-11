post "/games" do
  if request.xhr?
    word_xml = open("http://www.dictionaryapi.com/api/v1/references/collegiate/xml/#{params[:word]}?key=#{api_key}")
    response_body = word_xml.read[559, 441]
    p response_body
    if response_body
      "yes"
    else
      "no"
    end
  else
    redirect "/"
  end
end
