json.partial! 'api/guests/guest', guest: @guest

json.gifts @guest.gifts do |gift|
  json.partial! 'api/gifts/gift', gift: gift
end
