photo = Photo.create( title: "Wheres Waldo",
              link: "app/assets/images/ww_giant_image.jpg" )

Character.create( name: "Waldo" )
Character.create( name: "Wenda" )
Character.create( name: "Odlaw" )
Character.create( name: "Woof" )
Character.create( name: "Wizard Whitebeard" )

Character.all.each do |char|
  PhotoCharacter.create(  photo_id: photo.id,
                          character_id: char.id )
end
