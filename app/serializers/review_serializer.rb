class ReviewSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :description, :score, :teashop_id
end
